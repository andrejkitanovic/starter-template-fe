import { create } from "zustand";

import { bindURLParams } from "utils/bindURLParams";
import { isEmptyObject } from "utils/isEmptyObject";

export type Breadcrumb = {
  title?: string;
  translationId?: string;
  pathname: string;
};

type BreadcrumbState = {
  breadcrumbs: Breadcrumb[];
};

type BreadcrumbActions = {
  setBreadcrumbs: (
    breadcrumbs: Breadcrumb[],
    URLParams?: Record<string, string>,
  ) => void;
};

const BREADCRUMB_INITIAL_STATE: BreadcrumbState = {
  breadcrumbs: [],
};

export const useBreadcrumbStore = create<BreadcrumbState & BreadcrumbActions>(
  (set) => ({
    ...BREADCRUMB_INITIAL_STATE,
    setBreadcrumbs: (
      breadcrumbs: Breadcrumb[],
      URLParams: Record<string, string> = {},
    ) =>
      set({
        breadcrumbs: isEmptyObject(URLParams)
          ? breadcrumbs
          : bindURLParams(breadcrumbs, URLParams),
      }),
  }),
);

// for debugging
// useBreadcrumbStore.subscribe(console.log)

export default useBreadcrumbStore;
