"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileNavBar from "../MobileNavBar";
import TabletNavbar from "../TabletNavbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header>
      <div className="md:p-0  flex justify-between items-center p-6">
        <Link
          aria-label="back to home"
          onClick={() => setIsOpen(false)}
          href={"/"}
        >
          <Image
            className="w-10 h-10 md:ml-10 md:w-12 md:h-12"
            alt=""
            src={"/assets/shared/logo.svg"}
            height={48}
            width={48}
          />
        </Link>

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
        <TabletNavbar setIsOpen={setIsOpen} />
      </div>

      <MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
