import { navItems } from "@/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";

type DekstopNavbarProps = {
  setIsOpen: (value: boolean) => void;
};

export default function TabletNavbar({ setIsOpen }: DekstopNavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="md:flex ml-10 bg-white/5  grow justify-end  hidden  h-24 backdrop-blur-[80px]">
      <ul className="flex px-10 gap-12 text-white uppercase text-preset-8">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <li
              key={item.index}
              className={`font-bold  ${active ? "border-b-2" : ""} flex items-center`}
            >
              <Link
                aria-current={active ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className="flex gap-3 items-center"
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
