"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileNavBar from "../MobileNavBar";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header>
      <div className="flex justify-between items-center p-6">
        <Link
          aria-label="back to home"
          onClick={() => setIsOpen(false)}
          href={"/"}
        >
          <Image
            alt=""
            src={"/assets/shared/logo.svg"}
            height={40}
            width={40}
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
      </div>
      <MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
