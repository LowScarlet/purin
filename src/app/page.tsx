'use client'

import Header from "./components/Header";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (<>
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <Announcement />
      <nav className="py-1 border-b-2">
        <Navbar />
      </nav>
    </div>
    <Footer />
  </>);
}
