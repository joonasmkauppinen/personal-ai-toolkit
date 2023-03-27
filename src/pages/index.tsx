import type { GetServerSideProps, NextPage } from "next";

import { signIn, signOut, useSession } from "next-auth/react";

import { ProfileMenu } from "~/components/ProfileMenu/ProfileMenu";
import { Sidebar } from "~/components/Sidebar/Sidebar";
import { TextInput } from "~/components/TextInput/TextInput";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <section className="flex flex-row">
      <ProfileMenu />
      <Sidebar>
        <div className="h-10 w-10 bg-rose-700"></div>
        <div className="h-10 w-10 bg-rose-700"></div>
        <div className="h-10 w-10 bg-rose-700"></div>
        <div className="h-10 w-10 bg-rose-700"></div>
        <div className="h-10 w-10 bg-rose-700"></div>
        <div className="h-10 w-10 bg-rose-700"></div>
        <div className="h-10 w-10 bg-rose-700"></div>
        <div className="h-10 w-10 bg-rose-700"></div>
        <div className="h-10 w-10 bg-rose-700"></div>
      </Sidebar>
      <main className="flex h-screen flex-1 flex-col items-center bg-zinc-800">
        <div className="flex w-full max-w-2xl flex-1 flex-col items-stretch overflow-y-scroll">
          <div className="flex flex-1 flex-col">
            {/* Chat messages come here */}
          </div>
          <div className="flex pb-8">
            <TextInput
              placeholder="Type something"
              onSubmit={() => {
                console.log("TODO: Send message to openai api");
              }}
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession(context);

  if (!session?.user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
