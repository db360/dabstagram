import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";


export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>DaBstagram powered with next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/** Header **/}

      <Sidebar />
      <Header />

      {/** Feed **/}

      <Feed />

      {/** Modal **/}

      <Modal />

    </div>
  );
}
