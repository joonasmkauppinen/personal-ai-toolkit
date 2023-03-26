import type { AppType } from "next/app";
import type { Session } from "next-auth";

import Head from "next/head";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Personal AI Toolkit</title>
        <meta name="description" content="Personal AI Toolkit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
