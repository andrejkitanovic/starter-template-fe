import { map, split } from "lodash";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type MeState = {
  token: string | null;
  me: any;
};

type MeActions = {
  setToken: (token: string) => void;
  setMe: (me: any) => void;
  reset: () => void;
};

const ME_INITIAL_STATE: MeState = {
  token: null,
  me: null,
};

const useMeStore = create<MeState & MeActions>()(
  persist(
    (set, _get) => ({
      ...ME_INITIAL_STATE,
      setToken: (token) => set({ token }),
      setMe: (me) => set({ me }),
      reset: () => set(ME_INITIAL_STATE),
    }),
    {
      name: "me-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        token: state.token,
        me: state.me,
      }),
    },
  ),
);

// for debugging
// useMeStore.subscribe(console.log);

// export const role = () => {
//   const me = useMeStore.getState().me;
//   const team = useMeStore.getState().team;

//   if (!me || !team) return undefined;
//   const workspace = find(me.workspaces, { team: team._id });
//   return workspace?.role;
// };

export const userInitials = (name: string | undefined) => {
  if (!name) return "";
  return map(split(name, " "), (word) => word.charAt(0)).join("") ?? "";
};

export { useMeStore };
