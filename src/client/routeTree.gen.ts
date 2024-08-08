/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root.tsx'
import { Route as IndexImport } from './routes/index.tsx'
import { Route as BlogIndexImport } from './routes/blog/index.tsx'
import { Route as BlogPostidImport } from './routes/blog/$post_id.tsx'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const BlogIndexRoute = BlogIndexImport.update({
  path: '/blog/',
  getParentRoute: () => rootRoute,
} as any)

const BlogPostidRoute = BlogPostidImport.update({
  path: '/blog/$post_id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/blog/$post_id': {
      id: '/blog/$post_id'
      path: '/blog/$post_id'
      fullPath: '/blog/$post_id'
      preLoaderRoute: typeof BlogPostidImport
      parentRoute: typeof rootRoute
    }
    '/blog/': {
      id: '/blog/'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  BlogPostidRoute,
  BlogIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/blog/$post_id",
        "/blog/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/blog/$post_id": {
      "filePath": "blog/$post_id.tsx"
    },
    "/blog/": {
      "filePath": "blog/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */