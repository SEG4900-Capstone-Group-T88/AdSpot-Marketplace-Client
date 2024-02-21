import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Instagram from "next-auth/providers/instagram";
import Facebook from "next-auth/providers/facebook";

const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        Google({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
        }),
        Instagram({
            clientId: process.env.INSTAGRAM_ID ?? "",
            clientSecret: process.env.INSTAGRAM_SECRET ?? "",
        }),
        Facebook({
            clientId: process.env.INSTAGRAM_ID ?? "",
            clientSecret: process.env.INSTAGRAM_SECRET ?? "",
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };