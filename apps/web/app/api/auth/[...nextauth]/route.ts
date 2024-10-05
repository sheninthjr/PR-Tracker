// import prisma from 'db';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      authorization: {
        params: {
          scope: 'repo user:email',
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      // try {
      //   await prisma.user.create({
      //     data: {
      //       email: session.user.email,
      //       name: session.user.name,
      //       image: session.user.image,
      //     },
      //   });
      // } catch (e) {
      //   console.log('Error While Storing the user in the Database', e);
      // }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
