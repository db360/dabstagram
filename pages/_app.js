import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    /* // Responsable autentificacion */
    <SessionProvider session={session}>
      <RecoilRoot> {/* Pasar estados para el modal similar a Redux */}
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
