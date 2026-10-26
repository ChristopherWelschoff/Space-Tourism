"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { navItems } from "@/lib";

type MobileNavBarProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export default function MobileNavBar({ isOpen, setIsOpen }: MobileNavBarProps) {
  const pathname = usePathname();

  if (!isOpen) {
    return null;
  }

  return (
    <nav className="md:hidden flex flex-col gap-12 fixed pl-8 bg-blue-900/15 inset-y-0 right-0 z-100 w-63.5 backdrop-blur-[80px] ">
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
  );
}
