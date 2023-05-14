import React from "react";
import { ContainerOnboard } from "./style";
import { Button } from "@/Components";
import { useRouter } from "next/navigation";
import { PATHS, TABS_RESOURCES } from "@/_utils/constants";
import Image from "next/image";
import type { OnboardProps } from "@/_types/Onboard";

export function Onboard({ onChangeTab }: OnboardProps): JSX.Element {
  const { TAB_LIST_DRIVER, TAB_LIST_PLACE, TAB_LIST_TRANSPORT } =
    TABS_RESOURCES;
  const router = useRouter();
  return (
    <ContainerOnboard>
      <Image
        src="/images/data_control.webp"
        alt="Logo da aplicação"
        width={310}
        height={149}
        className="onboard__picture"
      />
      <h1 className="onboard__title">
        Gerencie os recursos de forma <br /> fácil e simplificada
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
            onChangeTab(TAB_LIST_PLACE);
          }}
        />
        <Button
          title="Transportes"
          onClick={() => {
            router.push(PATHS.dashboard.recursosTransportes);
            onChangeTab(TAB_LIST_TRANSPORT);
          }}
        />
        <Button
          title="Motoristas"
          onClick={() => {
            router.push(PATHS.dashboard.recursosMotoristas);
            onChangeTab(TAB_LIST_DRIVER);
          }}
        />
      </div>
      {/* <div className="onboard__circle" /> */}
    </ContainerOnboard>
  );
}
