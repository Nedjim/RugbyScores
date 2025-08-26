"use client";
import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "./get-query-clients";

export default function Provider({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
