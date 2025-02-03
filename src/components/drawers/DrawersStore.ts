import type { FC } from "react";
import { cloneDeep, delay } from "lodash";
import { create } from "zustand";

import { defaultDrawers } from "./drawers";

type DrawersState = {
  drawers: {
    key: string;
    Component: FC;
    // precheck?: () => Promise<boolean>;
    open: boolean;
    params: any;
  }[];
};

type DrawersActions = {
  openDrawer: (key: string, params?: any) => void;
  closeDrawer: (key: string) => void;
};

const MODALS_INITIAL_STATE: DrawersState = {
  drawers:
    defaultDrawers.map((drawer) => ({
      ...drawer,
      open: false,
      params: {},
    })) ?? [],
};

const useDrawersStore = create<DrawersState & DrawersActions>((set, get) => ({
  ...MODALS_INITIAL_STATE,
  openDrawer: (key, params) => {
    const drawers = cloneDeep(get().drawers);

    const drawerIndex = drawers.findIndex((d) => d.key === key);
    if (drawerIndex !== -1) {
      drawers[drawerIndex].open = true;
      drawers[drawerIndex].params = params;
    }

    // const drawerPrecheck = drawers[drawerIndex].precheck;
    // if ((await drawerPrecheck?.()) === false) {
    //   return;
    // }

    set({ drawers });
  },
  closeDrawer: (key) => {
    const drawers = cloneDeep(get().drawers);

    const drawerIndex = drawers.findIndex((d) => d.key === key);

    if (drawerIndex !== -1) {
      drawers[drawerIndex].open = false;
      delay(() => {
        drawers[drawerIndex].params = {};
      }, 300);
    }

    set({ drawers });
  },
}));

// for debugging
// useDrawersStore.subscribe(console.log);

export { useDrawersStore };

export const openDrawer = useDrawersStore.getState().openDrawer;
export const closeDrawer = useDrawersStore.getState().closeDrawer;
