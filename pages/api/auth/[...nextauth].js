import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    // Enhance callbacks from google response
    async session({ session, token, user }) {

      session.user.username = session.user.name // Junta el nombre en minusculas
        .split("")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub //google user id that comes back
      return session;
    },
  },
});
