import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="lg:bg-[url(/assets/home/background-home-desktop.jpg)] md:bg-[url(/assets/home/background-home-tablet.jpg)] bg-[url(/assets/home/background-home-mobile.jpg)] fixed inset-0 bg-cover bg-center -z-10"></div>
      </main>
    </>
  );
}
