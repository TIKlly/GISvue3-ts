export interface Route {
  path: string;
  name: string;
  meta?: {
    navState: boolean;
  };
  children?: Route[];
}

export function filterRoutes(
  routes: Route[],
  _parentPath: string = "",
): Route[] {
  return routes.reduce<Route[]>((filteredRoutes, route) => {
    // 排除404，排除没有meta的路由，排除navState不为true的路由
    if (
      route.name !== "NotFound" &&
      route.meta &&
      route.meta.navState === true
    ) {
      // 构建当前路由的路径
      const currentPath = route.path;
      // 如果存在子路由，则递归过滤子路由
      if (route.children && route.children.length > 0) {
        route.children = filterRoutes(route.children, currentPath);
      }
      // 将当前路由加入过滤后的结果中
      filteredRoutes.push({
        ...route,
        path: currentPath,
      });
    }
    return filteredRoutes;
  }, []);
}
