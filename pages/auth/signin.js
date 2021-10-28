import { getProviders, signIn as SignProviderIn } from "next-auth/react";
import Header from "../../components/Header";

export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img className="w-80" src="/static/dabstagram.svg" alt="" />
        <p className="font-xs italic mt-5">
          Not a real App, built for educational purpose.
        </p>
        <div className="mt-36">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => SignProviderIn(provider.id, { callbackUrl: '/'})}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
  return {
    providers: await getProviders()
  }
}
*/
