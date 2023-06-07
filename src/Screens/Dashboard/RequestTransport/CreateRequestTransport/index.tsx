import React from "react";
import { ContainerCreateRequestTransport } from "./style";
import { type NextPageWithLayout } from "@/pages/_app";
import { useCreateRequestTransport } from "./useCreateRequestTransport";
import {
  AwaitRequest,
  BreadCrumb,
  Button,
  CalendarForm,
  ContentScroll,
  DataBox,
  InputSelect,
  TextInput,
  TitleDivider,
  TitleSubtitle
} from "@/Components";
import { Form } from "react-final-form";
import { TextNote } from "@/style/shareStyle";
import { regexCPF, regexDate } from "@/_utils/masks";
import {
  initialValuesRequestTransport,
  validateCreateRequestTransport
} from "@/_utils/form/validations/requestTransport";
import { PATHS } from "@/_utils/constants";

export const CreateRequestTransport: NextPageWithLayout = () => {
  const {
    setSelectedTimes,
    focusOnError,
    getVacanciesTransportSelected,
    onGetRequestsDay,
    onCreateRequestTransport,
    dataTransport,
    dataDriver,
    breadCrumb,
    isLoading,
    reservedHoursDay,
    disabledCalendarForm,
    selectedTimes
  } = useCreateRequestTransport();

  return (
    <ContainerCreateRequestTransport>
      <BreadCrumb items={breadCrumb} />
      <AwaitRequest isVisible={isLoading} />
      <DataBox>
        <Form
          onSubmit={values => {
            onCreateRequestTransport(values);
          }}
          decorators={[focusOnError]}
          initialValues={initialValuesRequestTransport}
          validate={validateCreateRequestTransport}
          render={({ handleSubmit, form, values, errors }) => {
            const amountVacancies = getVacanciesTransportSelected(
              values.idTransporte
            );
            const vacanciesTransport = new Array(amountVacancies).fill("");
            const titleDividerVacancies =
              amountVacancies > 0
                ? `Passageiros do percurso - Disponibilidade de ${amountVacancies} vagas`
                : "Passageiros do percurso";
            return (
              <ContentScroll>
                <form onSubmit={handleSubmit} className="container__form">
                  <TitleDivider title="Dados gerais" />
                  <div className="childrens__form items__fields">
                    <InputSelect
                      label="Motorista *"
                      name="idMotorista"
                      placeholder="Informe o motorista"
                      disabled={isLoading}
                      data={dataDriver}
                      direction="bottom"
                      form={form}
                      isAwaiting={isLoading}
                    />
                    <TextInput
                      label="Finalidade *"
                      name="finalidade"
                      placeholder="Informe a finalidade"
                      disabled={isLoading}
                      maxLength={200}
                      classNameContainer="field__goal"
                    />
                    <InputSelect
                      label="Transporte *"
                      name="idTransporte"
                      placeholder="Informe o transporte"
                      disabled={isLoading}
                      data={dataTransport}
                      direction="bottom"
                      form={form}
                      isAwaiting={isLoading}
                    />
                    <TextInput
                      label="Local de saída *"
                      name="saida"
                      placeholder="Informe a local"
                      disabled={isLoading}
                    />
                    <TextInput
                      label="Local de destino *"
                      name="destino"
                      placeholder="Informe o destino"
                      disabled={isLoading}
                    />
                  </div>
                  <TitleDivider
                    title={titleDividerVacancies}
                    className="item__divider"
                  />
                  <div className="childrens__form items__fields">
                    {vacanciesTransport.map((_, index) => {
                      const position = index + 1;
                      return (
                        <div key={index} className="container__vacancies">
                          <TitleSubtitle
                            title={`Passageiro ${position}`}
                            className="vacancies__title"
                          />
                          <div className="fields__vacancies">
                            <TextInput
                              label={`Nome`}
                              name={`nome_passageiro_${position}`}
                              placeholder="Informe o nome do passageiro"
                              disabled={isLoading}
                            />
                            <TextInput
                              label={`CPF`}
                              name={`cpf_passageiro_${position}`}
                              placeholder="Informe o CPF do passageiro"
                              parse={regexCPF}
                              disabled={isLoading}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <TitleDivider
                    title="Data da viagem - Digite uma data para verificar a disponibilidade"
                    className="item__divider"
                  />
                  <TextNote className="note__text">
                    Nota: Basta digitar uma data para buscar os horários
                    disponíves do dia, após isso selecione os horários
                    disponíves
                  </TextNote>
                  <div className="childrens__form items__fields">
                    <div className="field__date">
                      <TextInput
                        label="Data *"
                        name="event__data"
                        placeholder="Informe a data"
                        disabled={isLoading}
                        parse={regexDate}
                        onChange={e =>
                          onGetRequestsDay((e.target as HTMLInputElement).value)
                        }
                      />
                      <CalendarForm
                        disabled={disabledCalendarForm}
                        reservedHoursDay={reservedHoursDay}
                        setSelectedTimes={setSelectedTimes}
                        selectedTimes={selectedTimes}
                        onSelectHours={data => {
                          form.change("hours", data);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form__buttons">
                    <Button
                      type="button"
                      variant="outline"
                      title="Cancelar"
                      disabled={isLoading}
                      navigateTo={PATHS.dashboard.solicitacoesTranportes}
                    />
                    <Button type="submit" title="Salvar" disabled={isLoading} />
                  </div>
                </form>
              </ContentScroll>
            );
          }}
        />
      </DataBox>
    </ContainerCreateRequestTransport>
  );
};
