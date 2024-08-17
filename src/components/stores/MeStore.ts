import { create } from "zustand";

// import { PermissionsType } from "./permissions";

type MeState = {
  token: string | null;
  me: unknown;
};

type MeActions = {
  setToken: (token: string) => void;
  setMe: (me: unknown) => void;
};

const ME_INITIAL_STATE: MeState = {
  token: null,
  me: null,
};

const useMeStore = create<MeState & MeActions>((set, _get) => ({
  ...ME_INITIAL_STATE,
  setToken: (token) => set({ token }),
  setMe: (me) => {
    set({ me });
  },
}));

// for debugging
// useMeStore.subscribe(console.log);

export { useMeStore };
