import { useEffect, type FC } from "react";
import { useLocation } from "react-router-dom";

import type { WithChildren } from "utils/types";

type ScrollTopProviderProps = WithChildren<unknown>;

const ScrollTopProvider: FC<ScrollTopProviderProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const main = document.querySelector("main");
    if (main) main.scrollTo(0, 0);
  }, [location.pathname]);

  return <>{children}</>;
};

export default ScrollTopProvider;
