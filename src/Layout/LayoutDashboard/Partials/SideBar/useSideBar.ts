import { type useSideBarData } from "@/_types/LayoutDashboard";
import { useRouter } from "next/router";

export function useSideBar(): useSideBarData {
  const router = useRouter();
  const currentPath = router?.pathname;
  function checkPathSelected(arrayPath: string[]): boolean {
    const isExistInArray = arrayPath.some(item => item === currentPath);
    return isExistInArray;
  }

  return {
    checkPathSelected
  };
}
