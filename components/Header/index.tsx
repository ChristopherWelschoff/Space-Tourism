"use client";
import Image from "next/image";
import Link from "next/link";
import type { NavItem } from "@/types/NavItem";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems: NavItem[] = [
  {
    index: "00",
    label: "Home",
    href: "/",
  },
  {
    index: "01",
    label: "Destination",
    href: "/1",
  },
  {
    index: "02",
    label: "Crew",
    href: "/2",
  },
  {
    index: "03",
    label: "Technology",
    href: "/3",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

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
              const active = pathname === item.href;
              return (
                <li
                  key={item.index}
                  className={`font-bold ${active ? "border-r-2" : ""}`}
                >
                  <Link
                    aria-current={active ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className="flex gap-3 items-center  "
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
