"use client";

import { toast } from "@/components/ui/use-toast";
import { HttpClient } from "@/helpers/clients/http-client";
import { LoginUserInput, LoginUserResponse } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export function useLogin() {
  const mutation = useMutation({
    mutationFn: async (input: LoginUserInput) =>
      HttpClient.post<LoginUserResponse>("accounts/authenticate", input),
    onSuccess: (data) => {
      toast({
        description: `Welcome ${data.firstName} ${data.lastName}, You have logged in successfully.`,
      });
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
