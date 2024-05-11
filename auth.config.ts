import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            if (isLoggedIn) return true;
            return Response.redirect(new URL('/'));
        },
    },
    providers: []
} satisfies NextAuthConfig;