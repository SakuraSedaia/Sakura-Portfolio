import RoutesData from "~/data/json/routes.json";

export interface RouteMeta {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
}

export interface RouteEntry {
  name: string;
  path: string;
  external?: boolean;
  fileName?: string | null;
  children?: RouteEntry[];
  params?: string[];
  meta?: Partial<RouteMeta>;
  fallback?: string | null;
}

export interface RouteGroup {
  basePath?: string;
  routes: RouteEntry[];
}

export interface RoutesManifest {
  $schema?: string;
  main: RouteGroup;
  [groupName: string]: RouteGroup | string | undefined;
}

export const routesManifest = RoutesData as RoutesManifest;

export function getRouteFileName(route: RouteEntry) {
  if (route.fileName !== undefined && route.fileName !== null) {
    return route.fileName;
  }

  const [pathWithoutHash] = route.path.split("#");
  const [pathWithoutSearch] = pathWithoutHash.split("?");
  const pathParts = pathWithoutSearch.split("/").filter(Boolean);

  return pathParts.at(-1) ?? "index";
}

export function getMainRoute(fileName: string) {
  const route = routesManifest.main.routes.find(
    (entry) => getRouteFileName(entry) === fileName,
  );

  if (route === undefined) {
    throw new Error(`Missing main route data for file "${fileName}".`);
  }

  return route;
}

export function getMainRouteMeta(fileName: string): RouteMeta {
  const route = getMainRoute(fileName);

  if (route.meta?.title === undefined) {
    throw new Error(`Missing metadata title for main route "${fileName}".`);
  }

  return route.meta as RouteMeta;
}

export function getMainNavigationRoutes() {
  return routesManifest.main.routes.filter(
    (route) =>
      (route.params ?? []).length === 0 &&
      (route.external === true || route.path.startsWith("/")),
  );
}
