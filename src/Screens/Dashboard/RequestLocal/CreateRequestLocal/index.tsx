import React from "react";
import { ContainerCreateRequestLocal } from "./style";
import { type NextPageWithLayout } from "@/pages/_app";
import { useCreateRequestLocal } from "./useCreateRequestLocal";
import {
  AwaitRequest,
  BreadCrumb,
  Button,
  CalendarForm,
  ContentScroll,
  DataBox,
  FormToggle,
  InputSelect,
  TextInput,
  TitleDivider
} from "@/Components";
import { Form } from "react-final-form";
import {
  initialValuesRequestLocal,
  validateRequestLocal
} from "@/_utils/form/validations/requestLocal";
import { regexDate } from "@/_utils/masks";
import { TextNote } from "@/style/shareStyle";
import { PATHS } from "@/_utils/constants";

export const CreateRequestLocal: NextPageWithLayout = () => {
  const {
    onGetRequestsDay,
    focusOnError,
    onCreateRequestLocal,
    setSelectedTimes,
    dataLocal,
    disabledCalendarForm,
    selectedTimes,
    isLoading,
    breadCrumb,
    reservedHoursDay
  } = useCreateRequestLocal();
  return (
    <ContainerCreateRequestLocal>
      <BreadCrumb items={breadCrumb} />
      <AwaitRequest isVisible={isLoading} />
      <DataBox>
        <Form
          onSubmit={values => {
            onCreateRequestLocal(values);
          }}
          decorators={[focusOnError]}
          initialValues={initialValuesRequestLocal}
          validate={validateRequestLocal}
          render={({ handleSubmit, form, values }) => {
            const shouldRenderFieldExternal = values?.is__external;
            return (
              <ContentScroll>
                <form onSubmit={handleSubmit} className="container__form">
                  <TitleDivider title="Dados gerais" />
                  <div className="childrens__form items__fields">
                    <InputSelect
                      label="Local *"
                      name="idLocal"
                      placeholder="Informe o local"
                      disabled={isLoading}
                      data={dataLocal}
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
                    <FormToggle
                      name="is__external"
                      label="É pessoa externa"
                      onClick={() => {
                        if (values?.is__external) form.change("externo", "");
                      }}
                    />
                    {shouldRenderFieldExternal && (
                      <TextInput
                        label="Nome pessoa externa *"
                        name="externo"
                        placeholder="Informe o nome da pessoa"
                        disabled={isLoading}
                      />
                    )}
                  </div>
                  <TitleDivider
                    title="Data do evento - Digite uma data para verificar a disponibilidade"
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
                      navigateTo={PATHS.dashboard.solicitacoesLocais}
                    />
                    <Button type="submit" title="Salvar" disabled={isLoading} />
                  </div>
                </form>
              </ContentScroll>
            );
          }}
        />
      </DataBox>
    </ContainerCreateRequestLocal>
  );
};
