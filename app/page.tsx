import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col grow">
      <div className="lg:bg-[url(/assets/home/background-home-desktop.jpg)] md:bg-[url(/assets/home/background-home-tablet.jpg)] bg-[url(/assets/home/background-home-mobile.jpg)] fixed inset-0 bg-cover bg-center -z-10"></div>
      <div className="flex flex-col items-center mt-6 gap-6 mx-6  ">
        <p className="text-preset-6 text-base uppercase">
          So, you want to travel to
        </p>
        <p className="text-white text-preset-1 text-[80px] uppercase">Space</p>
        <p className="text-preset-9  text-center text-[15px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="grow flex items-center justify-center">
        <Link
          href={"/"}
          className="flex justify-center mx-auto   text-blue-900 text-preset-4 text-[18px] items-center w-[144] h-[144] bg-white border rounded-full text-center uppercase"
        >
          Explore
        </Link>
      </div>
    </main>
  );
}
