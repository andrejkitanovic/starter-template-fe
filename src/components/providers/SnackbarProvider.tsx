import React, { type FC } from "react";
import { ToastContainer } from "react-toastify";

import type { WithChildren } from "utils/types";

import "react-toastify/dist/ReactToastify.css";

type SnackbarProviderProps = WithChildren<unknown>;

const SnackbarProvider: FC<SnackbarProviderProps> = ({ children }) => {
  return (
    <>
      <ToastContainer
        autoClose={3_000}
        limit={3}
        position="bottom-center"
        pauseOnHover
      />
      {children}
    </>
  );
};

export default SnackbarProvider;
