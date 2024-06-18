import { ClerkMiddlewareAuth, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

const publicRoutes = createRouteMatcher([
  '/'
]);

export default clerkMiddleware((auth: ClerkMiddlewareAuth, req: NextRequest) => {
  if(!publicRoutes(req)) auth().protect();
});

export const config = {
  matcher: [
    "/((?!.+\\.[w]+$|_next|_next/static/chunks/pages/api).*)" 
  ],
};