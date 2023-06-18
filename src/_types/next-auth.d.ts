import NextAuth from "next-auth";
import { type IUserSession } from "./Session";
// import NextAuth, { type User } from "next-auth";

// declare module "next-auth" {

// }

declare module "next-auth" {
  interface Session {
    name: string;
    accessToken: string;
  }
  interface User {
    id?: string;
    token: string;
    usuario: {
      id?: number;
      nome: string;
      tipoPerfil: string;
    };
  }
  interface Callbacks {
    jwt?: ({ token, user }: { token: JWT; user: User }) => Promise<JWT>;
  }
}
