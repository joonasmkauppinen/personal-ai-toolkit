import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

import { IconChevronDown } from "../IconChevronDown/IconChevronDown";
// import { IconChip } from "../IconChip/IconChip";

export const ProfileMenu = () => {
  const { data: sessionData } = useSession();

  return (
    <nav className="fixed top-0 right-0 p-2 pl-3">
      {/* <div className="flex flex-row items-center gap-2">
        <IconChip />
        <h1 className=" text-white">Personal AI Toolkit</h1>
      </div> */}
      <Popover>
        <Popover.Button className="focus:outline-none">
          <div className="flex flex-row items-center gap-3 rounded border border-zinc-600 bg-zinc-800 p-2 hover:cursor-pointer">
            <IconChevronDown />
            <ProfilePicture
              imageSrc={sessionData?.user.image}
              username={sessionData?.user.name}
            />
          </div>
        </Popover.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Popover.Panel className="absolute right-0 top-1 z-10 min-w-max">
            <ul className="overflow-hidden rounded border border-zinc-600 bg-zinc-800">
              <li
                className="pl-3 pr-8 pt-2 pb-2 text-sm text-white hover:cursor-pointer hover:bg-zinc-600"
                onClick={() => void signOut()}
              >
                Sign out
              </li>
            </ul>
          </Popover.Panel>
        </Transition>
      </Popover>
    </nav>
  );
};

interface ProfilePictureProps {
  imageSrc?: string | null;
  size?: number;
  username?: string | null;
}

const ProfilePicture = ({
  imageSrc,
  size = 24,
  username,
}: ProfilePictureProps) => {
  return (
    <div className="h-6 w-6 overflow-hidden rounded-full bg-gray-700">
      {imageSrc && username && (
        <Image
          alt={`${username}'s profile picture`}
          src={imageSrc}
          width={size}
          height={size}
        />
      )}
    </div>
  );
};
