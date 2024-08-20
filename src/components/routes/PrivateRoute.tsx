import { useEffect, type FC } from "react";
import {
  Route,
  useHistory,
  type match,
  type RouteProps,
} from "react-router-dom";

import DefaultLayout from "components/layouts/DefaultLayout";
import { LayoutSplashScreen } from "components/providers/SplashScreenProvider";
import {
  useBreadcrumbStore,
  type Breadcrumb,
} from "components/stores/BreadcrumbStore";
import { useMeStore } from "components/stores/MeStore";
import type { WithChildren } from "utils/types";

interface PrivateRouteProps extends RouteProps {
  showBreadcrumbs?: boolean;
  computedMatch?: match;
  breadcrumbs?: Breadcrumb[];
  // requiredPermissions?: PermissionsType[];
  // requiredRole?: FilterPortalUsersDataRole[];
  layout?: ({ children }: WithChildren<unknown>) => any;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  showBreadcrumbs = true,
  computedMatch,
  breadcrumbs,
  // requiredPermissions = [],
  // requiredRole = [],
  layout: Layout = DefaultLayout,
  ...rest
}) => {
  const history = useHistory();

  const token = useMeStore((s) => s.token);
  const me = useMeStore((s) => s.me);

  // const { data: currentUserResponse } = usePortalUserControllerGetMePortalUser({
  //   query: {
  //     enabled: Boolean(token),
  //     onError: (err: AxiosError) => {
  //       if (err.response?.status === 404) {
  //         useMeStore.getState().logout();
  //       }
  //     },
  //   },
  // });

  // const currentUser = useMemo(
  //   () => currentUserResponse?.data,
  //   [currentUserResponse],
  // );

  useEffect(() => {
    if (!token) history.push("/sign-in");
  }, [token, history]);

  useEffect(() => {
    // if (!currentUser) return;
    // useMeStore.getState().setMe(currentUser);
  }, []);

  useEffect(() => {
    if (!me || !breadcrumbs) return;

    useBreadcrumbStore
      .getState()
      .setBreadcrumbs(breadcrumbs, computedMatch!.params);
  }, [breadcrumbs, computedMatch, me]);

  if (me) {
    // if (hasRole(requiredRole)) {
    return (
      <Layout showBreadcrumbs={showBreadcrumbs}>
        <Route {...rest} />
      </Layout>
    );
    // } else {
    //   return <Box>{"You don't have access to this page"}</Box>;
    // }
  }

  return <LayoutSplashScreen />;
};

export default PrivateRoute;
