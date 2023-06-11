import React from "react";
import { ContainerEditRequestTransport } from "./style";
import { type NextPageWithLayout } from "@/pages/_app";
import { useEditRequestTransport } from "./useEditRequestTransport";
import {
  AwaitRequest,
  BreadCrumb,
  Button,
  ContentScroll,
  DataBox,
  FormToggle,
  LineDetails,
  TextInput,
  TitleDivider,
  TitleSubtitle
} from "@/Components";
import { Form } from "react-final-form";
import { PATHS } from "@/_utils/constants";
import { regexCPF } from "@/_utils/masks";
import { validateTransportAuthorization } from "@/_utils/form/validations/requestTransport";

export const EditRequestTransport: NextPageWithLayout = () => {
  const { onSendAuthorization, breadCrumb, isLoading, showData } =
    useEditRequestTransport();
  const shouldRendeButtonSubmit = !showData.isAuthorized;
  const titleCancelButton = shouldRendeButtonSubmit ? "Cancelar" : "Voltar";
  return (
    <ContainerEditRequestTransport>
      <BreadCrumb items={breadCrumb} />
      <AwaitRequest isVisible={isLoading} />
      <DataBox>
        <Form
          onSubmit={values => {
            onSendAuthorization(values);
          }}
          initialValues={{
            isAuthorized: !showData.isDenied,
            justificativa: showData?.justificativa ?? ""
          }}
          validate={validateTransportAuthorization}
          render={({ handleSubmit, form, values, errors }) => {
            const shouldRenderFieldJustify = values?.isAuthorized === false;
            const titleButton = shouldRenderFieldJustify
              ? "Negar"
              : "Autorizar";
            const variantButton = shouldRenderFieldJustify ? "danger" : "light";
            return (
              <ContentScroll>
                <form onSubmit={handleSubmit} className="container__form">
                  <TitleDivider title="Dados gerais" />
                  <div className="childrens__form items__fields">
                    <LineDetails
                      label="Solicitante"
                      value={showData.solicitante}
                    />
                    <LineDetails
                      label="Finalidade"
                      value={showData.finalidade}
                      className="field__goal"
                    />
                    <LineDetails label="Motorista" value={showData.motorista} />
                    <LineDetails
                      label="Transporte"
                      value={showData.transporte}
                    />
                    <LineDetails
                      label="Local de saída"
                      value={showData.saida}
                    />
                    <LineDetails
                      label="Local de destino"
                      value={showData.destino}
                    />
                  </div>
                  <TitleDivider
                    title="Passageiros do percurso"
                    className="item__divider"
                  />
                  <div className="childrens__form items__fields">
                    {(showData?.passageiros ?? []).map((item, index) => {
                      const position = index + 1;
                      return (
                        <div key={index} className="container__vacancies">
                          <TitleSubtitle
                            title={`Passageiro ${position}`}
                            className="vacancies__title"
                          />
                          <div className="fields__vacancies fields__vacancies--show">
                            <LineDetails label="Nome" value={item?.nome} />
                            <LineDetails
                              label="CPF"
                              value={regexCPF(item?.cpf)}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <TitleDivider
                    title="Data da viagem"
                    className="item__divider"
                  />
                  <div className="childrens__form items__fields">
                    <div className="field__date">
                      <LineDetails label="Data" value={showData.dataEvento} />
                      {/* <CalendarForm
                        typeCalendar="edit"
                        disabled={false}
                        reservedHoursDay={[]}
                        setSelectedTimes={e => false}
                        selectedTimes={reservedHoursDay}
                        onSelectHours={data => {
                          form.change("hours", data);
                        }}
                      /> */}
                    </div>
                  </div>
                  <TitleDivider
                    title="Autorização administração"
                    className="item__divider"
                  />
                  <div className="childrens__form items__fields">
                    <FormToggle
                      name="isAuthorized"
                      label="Autorizar solicitação"
                      disabled={showData.isAuthorized}
                      onClick={() => {
                        if (values?.isAuthorized === true)
                          form.change("justificativa", "");
                      }}
                    />
                    {shouldRenderFieldJustify && (
                      <TextInput
                        label="Justificativa *"
                        name="justificativa"
                        placeholder="Digite a sua justificativa"
                        disabled={isLoading}
                        classNameContainer="field__goal"
                      />
                    )}
                  </div>

                  <div className="form__buttons">
                    <Button
                      type="button"
                      variant="outline"
                      title={titleCancelButton}
                      disabled={isLoading}
                      navigateTo={PATHS.dashboard.solicitacoesTranportes}
                    />
                    {shouldRendeButtonSubmit && (
                      <Button
                        type="submit"
                        variant={variantButton}
                        title={titleButton}
                        disabled={isLoading}
                      />
                    )}
                  </div>
                </form>
              </ContentScroll>
            );
          }}
        />
      </DataBox>
    </ContainerEditRequestTransport>
  );
};
