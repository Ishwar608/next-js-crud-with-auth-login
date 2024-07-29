"use client";
import { toast } from "@/components/ui/use-toast";
import { Routes } from "@/config/routes";
import { HttpClient } from "@/helpers/clients/http-client";
import { useToken } from "@/helpers/Cookies/use-token";
import { LoginUserInput, LoginUserResponse } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useLogin() {
  const { setToken } = useToken();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async (input: LoginUserInput) =>
      HttpClient.post<LoginUserResponse>("accounts/authenticate", input),
    onSuccess: (data) => {
      // jwtToken
      setToken(data.jwtToken);
      toast({
        description: `Welcome ${data.firstName} ${data.lastName}, You have logged in successfully.`,
      });
      router.push(Routes.dashboard);
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
