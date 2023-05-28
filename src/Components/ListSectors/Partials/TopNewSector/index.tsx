import React from "react";
import { ContainerTopNewSector } from "./style";
import { Form } from "react-final-form";
import { TextInput } from "@/Components/TextInput";
import { Button } from "@/Components/Button";
import { type TopNewSectorProps } from "@/_types/Sectors/ListSectors";
import { FormToggle } from "@/Components/FormToggle";
import {
  initialValuesSector,
  validateSector
} from "@/_utils/form/validations/sectors";

export function TopNewSector({
  isVisible,
  isLoading,
  onCreateSector
}: TopNewSectorProps): JSX.Element {
  return (
    <ContainerTopNewSector isVisible={isVisible}>
      <Form
        onSubmit={(values, form) => {
          onCreateSector({
            nome: values?.nome,
            set_item: values?.set_item,
            form
          });
        }}
        initialValues={initialValuesSector}
        validate={validateSector}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="sector__fields">
              <TextInput
                label="Nome novo setor *"
                name="nome"
                placeholder="Digite o nome do setor"
                disabled={isLoading}
              />
              <FormToggle
                name="set_item"
                label="Usar este"
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              className="button__item"
              title={isLoading ? "Aguarde..." : "Cadastrar"}
              disabled={isLoading}
            />
          </form>
        )}
      />
    </ContainerTopNewSector>
  );
}
