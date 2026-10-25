import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <div>
            <Image alt="space" height={1624} width={750} src={"/assets/home/background-home-mobile.jpg"} />
        </div>
      </header>
      <main></main>
    </>
  );
}
