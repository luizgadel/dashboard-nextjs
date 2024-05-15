import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials"

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const apiUrl = 'https://dashboard-nestjs.vercel.app';
                const loginRoute = '/auth/login';
                const profileRoute = '/auth/profile'
                const loginResponse = await fetch(apiUrl + loginRoute, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: credentials.email, password: credentials.password }),
                });
                if (loginResponse.ok) {
                    const responseData: { access_token: string } = await loginResponse.json()
                    const jwt = responseData.access_token;

                    const profileResponse = await fetch(apiUrl + profileRoute, {
                      method: 'GET',
                      headers: {
                        'Authorization': `Bearer ${jwt}`
                      }
                    });
                    if (profileResponse.ok) {
                      const user = await profileResponse.json();
                      user.accessToken = jwt;
                      return user;
                    } else {
                      console.error('Failed to fetch user:', profileResponse.statusText);
                      return null;
                    }
                } else {
                  console.error('Failed to login:', loginResponse.statusText);
                  return null;
                }
            },
        }),
    ],
});