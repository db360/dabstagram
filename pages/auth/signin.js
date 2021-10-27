import { getProviders, signIn as SignProvider } from "next-auth/react";

// Running on Browser
function signIn({ providers }) {
  return (

    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}

    </>
  );
}

//Rendering on Server Side
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
