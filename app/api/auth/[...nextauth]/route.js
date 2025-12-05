import { authOptions } from "@/util/authOptions.jsx";
import NextAuth from 'next-auth/next';

const handler = NextAuth(authOptions);

export { handler as GET,handler as POST};