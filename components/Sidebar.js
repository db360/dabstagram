import { Fragment } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import { useRecoilState } from "recoil";
import { modalState, sidebarState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  const { data: session } = useSession();
  const [openSidebar, setOpenSidebar] = useRecoilState(sidebarState);
  const [open, setOpen] = useRecoilState(modalState);


  return (
    <Transition.Root show={openSidebar} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        onClose={setOpenSidebar}
      >
        <div className="flex justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-50 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="w-1/2 h-full bg-white px-7 pt-8 pb-4 overflow-hidden shadow-xl transform transition-all ">
              <div className="flex">
                <img
                  onClick={signOut}
                  src={session?.user?.image}
                  alt="profile picture"
                  className="justify-center h-10 w-10 rounded-full cursor-pointer hover:border-green-500 hover:border-2 transition-all ease-in-out"
                />
                <p className="ml-4 mt-2">
                  <span>{session?.user?.name}</span>
                </p>
                <a className="hover:text-blue-800 text-sm text-blue-400 cursor-pointer ml-8 mt-3" onClick={signOut}>Sign Out</a>
              </div>
              <div className="mt-10 flex flex-col">
                <div className="flex justify-between">
                <PaperAirplaneIcon className="sidebarBtn rotate-45" />
                <PlusCircleIcon
                  onClick={() => setOpen(true)}
                  className="sidebarBtn"
                />
                <UserGroupIcon className="sidebarBtn" />
                <HeartIcon className="sidebarBtn" />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
        <button className="opacity-0 absolute bottom-0"></button>{" "}
        {/*Trick para que no de error */}
      </Dialog>
    </Transition.Root>
  );
};

export default Sidebar;
