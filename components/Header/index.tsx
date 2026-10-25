import Image from "next/image";


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
    </header>
  );
}
