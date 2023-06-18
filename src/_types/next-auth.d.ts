import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    name: string;
    accessToken: string;
    user_type: string;
    id?: string | number;
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
}

declare module "next-auth/jwt" {
  interface JWT {
    user_type: string;
  }
}
