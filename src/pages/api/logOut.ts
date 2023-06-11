import { type NextApiRequest, type NextApiResponse } from "next";
import nookies from "nookies";

function onLogOut(): void {
  // Implemente sua lógica de servidor aqui
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  // Implemente sua lógica de servidor aqui
  console.log(JSON.stringify("chamado", null, 2));
  onLogOut(); // Chame sua função do lado do servidor

  // Envie a resposta para o cliente
}
