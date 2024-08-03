import { NextApiRequest } from "next";
import { AUTH_TOKEN_KEY } from "./lib/constants";
import { NextRequest } from "next/server";
import { PUBLIC_ROUTES, Routes } from "./config/routes";

export async function middleware(request: NextRequest) {
  const { cookies, nextUrl } = request;
  const token = cookies.get(AUTH_TOKEN_KEY);
  const isAuthenticated = !!token?.value;
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);
  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL(Routes.login, nextUrl));
  if (isAuthenticated && nextUrl.pathname === Routes.login)
    return Response.redirect(new URL(Routes.dashboard, nextUrl));
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
