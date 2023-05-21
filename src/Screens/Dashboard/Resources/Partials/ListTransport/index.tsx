import React, { useEffect } from "react";
import { ContainerListTransport } from "./style";

interface AddProducts {
  page: {
    param1: string;
    param2: string;
    param3: string;
    param4: string;
    tela: {
      nome: string[];
    };
  };
}

interface RemoveProduct {
  ecomm: number[];
}

export interface recursiveProps {
  event: "add" | "remove";
  dataTeste: AddProducts | RemoveProduct;
}

function recursive({ event, dataTeste }: recursiveProps): void {
  console.log(JSON.stringify(event, null, 2));
  if (dataTeste !== undefined) {
    Object.keys(dataTeste).forEach(key => {
      const child = dataTeste[key as keyof typeof dataTeste];
      if (typeof child === "string") {
        console.log("🔥🔥🔥🔥________________________🚑");
        console.log("É STRING");
      } else if (typeof child === "object") {
        if (Array.isArray(child)) {
          console.log("🔥🔥🔥🔥________________________🚑");
          console.log("É ARRAY");
          recursive({ event, dataTeste: child });
        } else {
          console.log("🔥🔥🔥🔥________________________🚑");
          console.log("É OBJETO");
          recursive({ event, dataTeste: child });
        }
      }
    });
  }
}

export function ListTransport(): JSX.Element {
  const ObjTeste = {
    page: {
      param1: "dataa",
      param2: "daasa",
      param3: "datasda",
      param4: "dat323a",
      tela: {
        nome: ["inicio"]
      }
    }
  };

  useEffect(() => {
    recursive({ event: "add", dataTeste: ObjTeste });
  }, []);

  return <ContainerListTransport></ContainerListTransport>;
}
