import Image from "next/image";

const navItems = [
  {
    index: "00",
    label: "Home",
  },
  {
    index: "01",
    label: "Destination",
  },
  {
    index: "02",
    label: "Crew",
  },
  {
    index: "03",
    label: "Technology",
  },
];

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center p-6">
        <Image
          alt="logo"
          src={"/assets/shared/logo.svg"}
          height={40}
          width={40}
        />

        <Image
          aria-label="nav-icon"
          alt="nav-icon"
          src={"/assets/shared/icon-hamburger.svg"}
          height={21}
          width={24}
        />
      </div>
      <nav className="flex flex-col gap-12 fixed pl-8 bg-blue-900/15 inset-y-0 right-0 z-100 w-63.5 backdrop-blur-[80px]">
        <Image
          className="self-end mt-8 mr-6"
          src={"/assets/shared/icon-close.svg"}
          alt="back-button"
          width={20}
          height={21}
        />
        <ul className="flex flex-col gap-8 text-white text-preset-8 uppercase">
          {navItems.map((item) => {
            return (
              <li
                className="flex gap-3 items-center font-bold"
                key={item.index}
              >
                {item.index}
                <span className="font-normal">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
