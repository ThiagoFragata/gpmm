import { PATHS } from "@/_utils/constants";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user !== undefined) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
        // return {
        //   token:
        //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3NpdmFuY2FyZG9zbzc2N0BnbWFpbC5jb20iLCJleHAiOjE2ODU3MzM5NzB9.cwU2mWrViMB-xEQpx7jqb_FnezhA3I_zOJ7tgfvqZPi-POTKBlF1fSah3mp-PIv0w_Ay206d-ePMuwa3_TeKkg",
        //   usuario: {
        //     id: 23,
        //     nome: "ROSIVAN",
        //     cpf: "03298303259",
        //     siape: "234244332",
        //     dataNascimento: "1999-02-18",
        //     tipoPerfil: "ADMIN",
        //     telefone: {
        //       tipo: "CELULAR",
        //       numero: "92912212212"
        //     },
        //     setor: {
        //       id: 2,
        //       nome: "Coordenação acadêmica"
        //     },
        //     email: "rosivancardoso767@gmail.com",
        //     codigoAtivacao: null,
        //     status: "ATIVADA",
        //     motorista: {
        //       numeroCnh: "1094810812"
        //     }
        //   }
        // };
      }
    })
  ],
  pages: {
    signIn: PATHS.login
  }
};
