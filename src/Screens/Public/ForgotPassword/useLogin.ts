import { type onSubmitLoginProps, type useLoginData } from "@/_types/Login";

export function useLogin(): useLoginData {
  function onSubmitLogin({ user_name, password }: onSubmitLoginProps): void {
    console.log("🔥🔥🔥🔥________________________🚑");
    console.log(JSON.stringify({ user_name, password }, null, 2));
    console.log("🔥🔥🔥🔥________________________🚑");
  }
  return {
    onSubmitLogin
  };
}
