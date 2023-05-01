import { type useSideBarData } from "@/_types/LayoutDashboard";
import { useRouter } from "next/router";

export function useSideBar(): useSideBarData {
  const router = useRouter();
  return {
    currentPath: router?.pathname
  };
}
