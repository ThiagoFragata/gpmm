import React from "react";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import type {
  onCreateLocalProps,
  useCreateLocalData
} from "@/_types/Local/CreateLocal";
import { PATHS } from "@/_utils/constants";
import { servicePostLocal } from "@/services/api/local";

export function useCreateLocal(): useCreateLocalData {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Recursos"
    },
    {
      label: "Locais",
      destiny: PATHS.dashboard.recursosLocais
    },
    {
      label: "Novo local"
    }
  ];

  async function onCreateLocal(payload: onCreateLocalProps): Promise<void> {
    try {
      setIsLoading(true);
      const data = await servicePostLocal(payload);
      console.log("🔥🔥🔥🔥________________________🚑");
      console.log(JSON.stringify(data, null, 2));
      console.log("🔥🔥🔥🔥________________________🚑");
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    } finally {
      setIsLoading(false);
    }
  }

  return {
    onCreateLocal,
    breadCrumb,
    isLoading
  };
}
