import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState, sidebarState } from "../atoms/modalAtom";

import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";
// import Bubbles from "../public/images/bubbles.jpg";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const [openSidebar, setOpenSidebar] = useRecoilState(sidebarState);
  const router = useRouter();

  // console.log(session);

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-40">
      <div className="flex justify-between pt-2 pb-2 max-w-6xl mx-4 xl:mx-auto">
        {/* Left */}
        <div onClick={()=> router.push('/')} className="relative hidden lg:inline-grid w-40 cursor-pointer ">
          <Image
            src="/static/dabstagram.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div onClick={()=> router.push('/')} className="relative w-10  lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle - Search input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md">
            <div className="hidden md:flex absolute inset-y-0 pl-3  items-center pointer-events-none">
              <SearchIcon className="h-4 w-5 text-gray-500" />
            </div>
            <input
              className="hidden md:flex bg-gray-50 text-xs md:text-sm w-full pl-10  border-gray-300 focus:ring-green-500 hover:border-green-500 rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={()=> router.push('/')} className="navBtn" />
          <MenuIcon onClick={() => setOpenSidebar(true)} className="hover:scale-125 hover:rotate-90 transition-all duration-100 cursor-pointer h-6 md:hidden min-w-max" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="bg-red-500 rounded-full flex items-center justify-center absolute -top-1.5 -right-2 text-xs w-5 h-5 animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="profile picture"
                className="h-10 w-10 rounded-full cursor-pointer hover:border-green-500 hover:border-2 transition-all ease-in-out"
              />
            </>
          ) : (
            <button className="sm:text-sm text-xs" onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
