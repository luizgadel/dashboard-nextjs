import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const loggedInHome = '/home';
            const loggedInAllowedRoutes = [loggedInHome, '/users', '/favicon', '/dashboard']
            const loggedOutHome = '/login'
            const loggedOutAllowedRoutes = [loggedOutHome, '/favicon']
            const nextRoute = nextUrl.pathname
            if (isLoggedIn) {
                if (loggedInAllowedRoutes.some(f => nextRoute.startsWith(f)))
                    return true
                else {
                    return Response.redirect(new URL(loggedInHome, nextUrl))
                }
            } else {
                if (loggedOutAllowedRoutes.some(f => nextRoute.startsWith(f)))
                    return true;
                else {
                    return Response.redirect(new URL(loggedOutHome, nextUrl))
                }
            }
        },
    },
    providers: []
} satisfies NextAuthConfig;