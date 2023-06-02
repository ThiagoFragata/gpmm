import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PATHS } from "@/_utils/constants";
import { type NextAuthOptions } from "next-auth";
import { servicePostLogin } from "@/services/api/user";
import { type IDataServeError } from "@/_types/Common";
import { type IUserSessionNextAuth } from "@/_types/Session";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      authorize: async (credentials): Promise<IUserSessionNextAuth | null> => {
        const { email, senha } = credentials as {
          email: string;
          senha: string;
        };

        try {
          const result = await servicePostLogin({ email, senha });
          return {
            id:
              result.usuario.id !== undefined ? String(result.usuario.id) : "0",
            token: result.token,
            usuario: result.usuario
          };
        } catch (error) {
          const _error = error as IDataServeError;
          const messageError =
            _error?.response?.data?.errors[0] ?? "Falha ao realizar login";
          throw new Error(messageError);
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      const isValidUser = user !== null && user !== undefined;
      isValidUser && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        user: token.user
      };
    }
  },
  pages: {
    signIn: PATHS.login,
    error: "/naotem"
  }
};

export default NextAuth(authOptions);
