"use client";
import Image from "next/image";
import Link from "next/link";
import type { NavItem } from "@/types/NavItem";
import { useState } from "react";

const navItems: NavItem[] = [
  {
    index: "00",
    label: "Home",
    href: "/",
  },
  {
    index: "01",
    label: "Destination",
    href: "/",
  },
  {
    index: "02",
    label: "Crew",
    href: "/",
  },
  {
    index: "03",
    label: "Technology",
    href: "/",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header>
      <div className="flex justify-between items-center p-6">
        <Link aria-label="back to home" onClick={() => setIsOpen(false)} href={"/"}>
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
          className="cursor-pointer"
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
      {isOpen && (
        <nav className="flex flex-col gap-12 fixed pl-8 bg-blue-900/15 inset-y-0 right-0 z-100 w-63.5 backdrop-blur-[80px] ">
          <button
            type="button"
            aria-label="close menu"
            onClick={() => setIsOpen(false)}
            className="self-end mt-8 mr-6 cursor-pointer"
          >
            <Image
              src={"/assets/shared/icon-close.svg"}
              alt=""
              width={20}
              height={21}
            />
          </button>
          <ul className="flex flex-col gap-8 text-white text-preset-8 uppercase">
            {navItems.map((item) => {
              return (
                <li key={item.index} className="font-bold">
                  <Link
                    onClick={() => setIsOpen(false)}
                    className="flex gap-3 items-center "
                    href={item.href}
                  >
                    {item.index}
                    <span className="font-normal">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
