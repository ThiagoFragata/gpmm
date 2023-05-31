import { PROFILE_TYPE } from "./constants";

export function getLabelTypeProfile(value: number): string {
  const data = PROFILE_TYPE.find(item => item.id === value)?.name ?? "NORMAL";
  return data;
}

export function getIdTypeProfile(value: string): number {
  const data = PROFILE_TYPE.find(item => item.name === value)?.id ?? 0;
  return data;
}
