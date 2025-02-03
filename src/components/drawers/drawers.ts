import type { FC } from "react";

export const defaultDrawers: {
  key: string;
  Component: FC<any>;
  precheck?: () => Promise<boolean>;
}[] = [];
