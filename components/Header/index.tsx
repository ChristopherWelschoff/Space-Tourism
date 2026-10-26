"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileNavBar from "../MobileNavBar";
import DesktopNavbar from "../DesktopNavbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header>
      <div className="lg:mt-10 md:p-0  flex justify-between items-center p-6">
        <Link
          aria-label="back to home"
          onClick={() => setIsOpen(false)}
          href={"/"}
        >
          <Image
            className="lg:ml-16 md:ml-10 md:w-12 md:h-12 w-10 h-10 "
            alt=""
            src={"/assets/shared/logo.svg"}
            height={48}
            width={48}
          />
        </Link>
        <div className="z-10 hidden -mr-4 ml-16 lg:block bg-white/25 h-px grow"></div>

        <button
          type="button"
          aria-label="open menu"
          aria-expanded={isOpen}
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Image
            alt=""
            src={"/assets/shared/icon-hamburger.svg"}
            height={21}
            width={24}
          />
        </button>
        <DesktopNavbar  />
      </div>

      <MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
