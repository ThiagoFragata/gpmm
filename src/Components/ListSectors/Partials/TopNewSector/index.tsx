import React from "react";
import { ContainerTopNewSector } from "./style";
import { Form } from "react-final-form";
import { TextInput } from "@/Components/TextInput";
import { Button } from "@/Components/Button";
import { type TopNewSectorProps } from "@/_types/Sectors/ListSectors";
import {
  initialValuesSector,
  validateSector
} from "@/_utils/form/validations/sectors";

export function TopNewSector({
  isVisible,
  isLoading,
  onCreateSector,
  onCallTopDefault
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
        render={({ form, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="sector__fields">
              <TextInput
                label="Nome novo setor *"
                name="nome"
                placeholder="Digite o nome do setor"
                disabled={isLoading}
              />
            </div>
            <div className="sector__buttons">
              <Button
                variant="outline"
                className="button__item"
                title={isLoading ? "Aguarde..." : "Cancelar"}
                disabled={isLoading}
                onClick={() => {
                  form.restart();
                  onCallTopDefault();
                }}
              />
              <Button
                type="submit"
                className="button__item"
                title={isLoading ? "Aguarde..." : "Cadastrar"}
                disabled={isLoading}
              />
            </div>
          </form>
        )}
      />
    </ContainerTopNewSector>
  );
}
