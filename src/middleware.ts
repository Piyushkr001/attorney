import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { clerkMiddleware } from "@clerk/nextjs/server";
import { createRouteMatcher } from '@clerk/nextjs/server'; // Import createRouteMatcher

export const middleware = createMiddleware(routing);
export const clerk = clerkMiddleware();

export const config = {
  matcher: [
    // Match only internationalized pathnames
    '/', 
    '/(hi|en)/:path*',
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

const isProtectedRoute = createRouteMatcher(['/']);
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});