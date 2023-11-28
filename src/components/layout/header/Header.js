import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const NavigationMap = ({ navigationItems }) => {
  const { pathname } = useRouter();

  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {navigationItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={`${
            pathname === item.link ? "text-purple" : "text-gray-900"
          } text-sm font-semibold leading-6 uppercase hover:text-purple`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

const navigationItems = [
  // { label: "Home", link: "/" },
  // { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contact" },
];

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <header
      className={`${
        isScrolled
          ? "bg-white border-b border-black border-opacity-10"
          : "bg-grey-200"
      } lg:fixed relative w-full z-50 transition-all duration-200 ease-in-out`}
    >
      <nav
        className={`${
          isScrolled ? "p-3" : "p-6"
        } mx-auto flex items-center justify-between lg:px-12 absolute w-full lg:relative transition-all duration-200 ease-in-out`}
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
      </nav>
      <div
        className={`${
          isActive ? "w-full" : "w-0"
        } lg:hidden bg-grey-200 h-screen absolute z-10 overflow-hidden transition-width duration-500 ease-in-out`}
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
              href="/contact"
              className="block rounded-lg py-2 pl-6 pr-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
