"use client";
import { toast } from "@/components/ui/use-toast";
import { Routes } from "@/config/routes";
import { HttpClient } from "@/helpers/clients/http-client";
import { useToken } from "@/helpers/Cookies/use-token";
import { LoginUserInput, LoginUserResponse } from "@/types/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { authorizationAtom } from "../authorization-atom/authorization-atom";
import { useAtom } from "jotai";
import { deleteAllLocalStoreData } from "@/helpers/Cookies/cookiesHelper";

export function useLogin() {
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async (input: LoginUserInput) =>
      HttpClient.post<LoginUserResponse>("accounts/authenticate", input),
    onSuccess: (data) => {
      setToken(data.jwtToken);
      setAuthorized(true);
      toast({
        description: `Welcome ${data.firstName} ${data.lastName}, You have logged in successfully.`,
      });
      router.push(Routes.dashboard);
      router.refresh();
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        description: `${error.message}`,
      });
    },
  });

  return mutation;
}

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);

  function handleLogout() {
    setToken("");
    setAuthorized(false);
    deleteAllLocalStoreData();
    queryClient.clear();
    // router.push(Routes.login);
    router.refresh();
  }
  return {
    mutate: handleLogout,
  };
}
