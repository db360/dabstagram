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
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-40 cursor-pointer ">
          <Image
            src="/static/dabstagram.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10  lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle - Search input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 md:text-sm border-gray-300 focus:ring-green-500 hover:border-green-500 rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />

          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="bg-red-500 rounded-full flex items-center justify-center absolute -top-1.5 -right-2 text-xs w-5 h-5 animate-pulse text-white">3</div>
          </div>

          <MenuIcon className="h-6 md:hidden min-w-max" />

          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img
            src="static/bubbles.jpg"
            alt="profile picture"
            className="h-10 rounded-full cursor-pointer hover:border-green-500 hover:border-2 transition-all ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
