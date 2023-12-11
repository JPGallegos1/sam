import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Logo from "../../atoms/logo";
import Menu from "../../atoms/menu";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Students", path: "/students" },
  ];

  return (
    <>
      <nav className="relative items-center py-5 sm:px-0 mx-auto max-w-screen-xl md:flex md:space-x-6 bg-sky-800">
        <div className="flex justify-between px-4">
          <Logo />
          <Menu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
        </div>
        <ul
          className={`flex-1 justify-between mt-4 md:text-sm md:font-medium md:flex md:mt-0 ${
            isMenuActive
              ? "absolute inset-x-0 px-4 border-b bg-sky-800 md:border-none md:static"
              : "hidden"
          }`}
        >
          <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-white hover:text-gray-400">
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </>
  );
}
