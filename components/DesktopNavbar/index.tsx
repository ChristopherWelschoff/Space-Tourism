import { navItems } from "@/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function DesktopNavbar() {
  const pathname = usePathname();

  return (
    <nav className="lg:ml-0 md:flex ml-10 bg-white/5  grow justify-end  hidden  h-24 backdrop-blur-[80px]">
      <ul className="lg:px-16 flex px-10 gap-12 text-white uppercase text-preset-8">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <li
              key={item.index}
              className={`font-bold  ${active ? "border-b-2" : ""} flex items-center`}
            >
              <Link
                aria-current={active ? "page" : undefined}
           
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
