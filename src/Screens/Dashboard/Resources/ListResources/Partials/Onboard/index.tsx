import React from "react";
import { ContainerOnboard } from "./style";
import { Button } from "@/Components";
import { useRouter } from "next/navigation";
import { PATHS } from "@/_utils/constants";
import Image from "next/image";

export function Onboard(): JSX.Element {
  const router = useRouter();
  return (
    <ContainerOnboard>
      <Image
        src="/images/data_control.webp"
        alt="Logo da aplicação"
        width={386}
        height={186}
        className="onboard__picture"
      />
      <h1 className="onboard__title">
        Gerencia os recursos de forma <br /> fácil e simplificada
      </h1>
      <h2 className="onboard__subtitle">
        Para começar a visualizar os dados, bastar selecionar
        <br /> qualquer das abas acima ou clicar em:
      </h2>
      <div className="onboard__buttons">
        <Button
          title="Locais"
          onClick={() => {
            router.push(PATHS.dashboard.recursosLocais);
          }}
        />
        <Button
          title="Transportes"
          onClick={() => {
            router.push(PATHS.dashboard.recursosTransportes);
          }}
        />
        <Button
          title="Motoristas"
          onClick={() => {
            router.push(PATHS.dashboard.recursosMotoristas);
          }}
        />
      </div>
      {/* <div className="onboard__circle" /> */}
    </ContainerOnboard>
  );
}
