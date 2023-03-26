import type { GetServerSideProps, NextPage } from "next";

import Head from "next/head";
import { signIn } from "next-auth/react";

import { getServerAuthSession } from "~/server/auth";

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Authentication</title>
      </Head>
      <div className="absolute top-0 right-0 left-0 bottom-0 flex h-full w-full flex-col items-center justify-center gap-5">
        <h1 className="text-4xl text-gray-200">Authentication</h1>
        <button
          className="w-28 rounded bg-white p-2"
          onClick={() => void signIn()}
        >
          Sign In
        </button>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession(context);

  if (session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default LoginPage;
