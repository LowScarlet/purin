'use client'

import Header from "./components/Header";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import NavLinks from "./components/Navlinks";
import ShareAndSound from "./components/ShareAndSound";

export default function Home() {
  return (<>
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <section>
        <Announcement />
        <nav className="py-1 border-b-2">
          <div className="flex justify-between items-center mx-8 my-6 font-semibold text-neutral-500 text-sm uppercase">
            <NavLinks />
            <ShareAndSound />
          </div>
        </nav>
      </section>
    </div>
    <Footer />
  </>);
}
