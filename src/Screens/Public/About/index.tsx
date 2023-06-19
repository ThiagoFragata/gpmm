import React from "react";
import { ContainerAbout } from "./style";
import { type NextPageWithLayout } from "@/pages/_app";
import { ContentScroll, DataBox } from "@/Components";
import Image from "next/image";

export const About: NextPageWithLayout = () => {
  return (
    <ContainerAbout>
      <DataBox>
        <ContentScroll>
          <h1 className="about__title">
            Sistema de Gerenciamento de Patrimônio - GPMM
          </h1>
          <Image
            src="/images/logo.png"
            alt="Logo da aplicação"
            width={301.16}
            height={121.53}
            className="about__image"
          />
          <div className="about__body">
            <div className="body__left">
              <div>
                <h3 className="about__subtitle">Visão Geral:</h3>
                <p className="about__text">
                  O objetivo do Sistema de Gerenciamento de Patrimônio (GPMM) é
                  oferecer uma solução Web para agilizar o processo de
                  solicitação de reservas de salas e transportes
                  disponibilizados pelo Instituto de Ciências Exatas e
                  Tecnologia (ICET), como salas de reuniões, auditórios,
                  laboratórios, carros e até mesmo serviços internos de limpeza
                  e instalações, entre outros.
                </p>
              </div>
              <div>
                <h3 className="about__subtitle">Recursos e Funcionalidades:</h3>
                <ul className="about__list">
                  <li className="about__text">
                    Registro e controle de informações de setores, motoristas,
                    transportes e locais;
                  </li>
                  <li className="about__text">
                    Agendamento de locais e solicitação de transporte,
                    permitindo que os usuários internos e externos solicitem
                    serviços conforme suas necessidade;
                  </li>
                  <li className="about__text">
                    Controle de disponibilidade de veículos e alocação eficiente
                    dos recursos;
                  </li>
                  <li className="about__text">
                    Pedido de materiais através de comunicação interna.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="about__subtitle">Requisitos do Sistema:</h3>
                <ul className="about__list">
                  <li className="about__text">
                    Navegador web moderno (como Google Chrome, Mozilla Firefox
                    ou Safari);
                  </li>
                  <li className="about__text">Conexão de internet estável.</li>
                </ul>
              </div>
            </div>
            <div className="body__right">
              <div>
                <h3 className="about__subtitle">Apoio:</h3>
                <Image
                  src="/images/icet.png"
                  alt="Logo da aplicação"
                  width={81}
                  height={133}
                  className="about__image"
                />
              </div>
              <div>
                <h3 className="about__subtitle">Membros da equipe:</h3>
                <ul className="about__list">
                  <li className="about__text">
                    Prof. Dr. Vandermi João da Silva
                  </li>
                  <li className="about__text">
                    Prof. João da Mata Libório Filho
                  </li>
                  <li className="about__text">Rosivan Cardoso Ferreira</li>
                  <li className="about__text">
                    Josilene Vitória dos Santos da Silva
                  </li>
                  <li className="about__text">Adriano dos Santos Gomes</li>
                  <li className="about__text">Iano Maciel</li>
                </ul>
              </div>
              <div>
                <h3 className="about__subtitle">Versão:</h3>
                <p className="about__text">1.0.0</p>
              </div>
            </div>
          </div>
        </ContentScroll>
      </DataBox>
    </ContainerAbout>
  );
};
