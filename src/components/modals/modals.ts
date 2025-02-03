import type { FC } from "react";

export const defaultModals: {
  key: string;
  Component: FC<any>;
  precheck?: () => Promise<boolean>;
}[] = [];
