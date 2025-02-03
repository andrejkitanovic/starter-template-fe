import React, { useCallback, type FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { toast } from "react-toastify";

import type { WithChildren } from "utils/types";

const ReactQueryProvider: FC<WithChildren> = ({ children }) => {
  const handleError = useCallback((error: any) => {
    toast.error(error?.response?.data?.message || "Error");
  }, []);

  const handleSuccess = useCallback((response: any) => {
    toast.success(response?.message || "Success");
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        onError: handleError,
      },
      mutations: {
        onError: handleError,
        onSuccess: handleSuccess,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools position="bottom-right" />
      )}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
