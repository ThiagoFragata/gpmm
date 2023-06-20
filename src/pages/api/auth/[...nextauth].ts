import { type IDataServeError } from "@/_types/Common";
import { type IUserSession } from "@/_types/Session";
import { servicePostLogin } from "@/services/api/user";
import { type NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize: async (credentials): Promise<IUserSession | any> => {
        try {
          const { email, password } = credentials as {
            email: string;
            password: string;
          };
          const user = await servicePostLogin({ email, senha: password });
          const isExistUser = user !== null && user !== undefined;
          if (isExistUser) {
            const userData = user;
            return userData;
          } else {
            return null;
          }
        } catch (error) {
          const _error = error as IDataServeError;
          const messageError =
            _error?.response?.data?.errors[0] ??
            "Não foi realizar a ação, tente novamente mais tarde";
          throw new Error(String(messageError));
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 86400 // 24h
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      const isExistUser = user !== null && user !== undefined;
      if (isExistUser) {
        token.name = user?.usuario?.nome;
        token.user_type = user?.usuario?.tipoPerfil;
        token.accessToken = user.token;
        token.id = user?.usuario?.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      const isExistToken = token !== null && token !== undefined;
      if (isExistToken) {
        session.name = String(token.name ?? "");
        session.user_type = token?.user_type;
        session.accessToken = String(token.accessToken ?? "");
        session.id = String(token.id ?? "");
      }
      return session;
    }
  }
  // secret: process.env.NEXTAUTH_SECRET
  // pages: {
  //   signIn: "/login",
  //   error: "/error"
  // },
  // jwt: {
  //   secret: process.env.NEXTAUTH_SECRET
  // }
};

export default NextAuth(authOptions);
