/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/city/[city]`, params: Router.UnknownInputParams & { city: string | number; } } | { pathname: `/profile/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/city/[city]`, params: Router.UnknownOutputParams & { city: string; } } | { pathname: `/profile/[id]`, params: Router.UnknownOutputParams & { id: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | `/city/${Router.SingleRoutePart<T>}${`?${string}` | `#${string}` | ''}` | `/profile/${Router.SingleRoutePart<T>}${`?${string}` | `#${string}` | ''}` | { pathname: `/city/[city]`, params: Router.UnknownInputParams & { city: string | number; } } | { pathname: `/profile/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
    }
  }
}
