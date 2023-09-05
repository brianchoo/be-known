import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const NavigationMap = ({ navigationItems }) => {
  const router = useRouter();
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {navigationItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={`${
            router.pathname === item.link ? "text-purple" : "text-gray-900"
          } text-sm font-semibold leading-6 uppercase`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

const navigationItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contact" },
];

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const navbarHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="bg-grey-light lg:fixed relative w-full">
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-12 absolute w-full lg:relative"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5">
            <Image
              className="logo"
              src="/logo.svg"
              alt="logo"
              width={100}
              height={80}
            />
          </a>
        </div>
        <div onClick={navbarHandler} className="close-btn lg:hidden">
          {!isActive ? (
            <Image src="/burger.svg" alt="burger menu" width={26} height={26} />
          ) : (
            ""
          )}
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavigationMap navigationItems={navigationItems} />
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <svg
              className="w-6 h-6 mx-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="90px"
              height="90px"
            >
              <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z" />
            </svg>
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <svg
              className="w-8 h-8 -mb-0.5 mx-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="96px"
              height="96px"
            >
              <path d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z" />
            </svg>
          </a>
        </div>
      </nav>
      <div
        className={`${
          isActive ? "w-full" : "w-0"
        } lg:hidden bg-grey-light h-screen absolute z-10 overflow-hidden transition-width duration-500 ease-in-out`}
      >
        <div
          onClick={navbarHandler}
          className="close-btn lg:hidden p-6 flex justify-end"
        >
          <Image src="/close.svg" alt="close button" width={26} height={26} />
        </div>
        <div className="space-y-2">
          <div className="mt-2 space-y-2" id="disclosure-1">
            <a
              href="#"
              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="#"
              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Projects
            </a>
            <a
              href="#"
              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
