import React from "react";

import { closeDrawer, useDrawersStore } from "./DrawersStore";

const DrawersStoreComponent = () => {
  const drawers = useDrawersStore((s) => s.drawers);
  // const hasOpenDrawer = useMemo(() => drawers.some((d) => d.open), [drawers]);

  return (
    <>
      {drawers.map(({ Component, open, key, params }) => (
        <Component
          key={key}
          visible={open}
          handleClose={() => closeDrawer(key)}
          {...params}
        />
      ))}
    </>
  );
};

export default DrawersStoreComponent;
