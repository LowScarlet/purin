import Link from "next/link";
import { LuCat } from "react-icons/lu";
import NavLinks from "./Navlinks";
import ShareAndSound from "./ShareAndSound";
import { Permanent_Marker } from "next/font/google";

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white px-8 py-6 font-semibold text-neutral-500 text-sm uppercase">
      <div className="flex items-center space-x-4">
        <Link href={"/"} className="flex items-center space-x-2 me-8">
          <LuCat className="text-4xl" />
          <div className="text-xs normal-case">
            <h1 className={"font-bold " + permanentMarker.className}>Purin Kokoa</h1>
            <p className="text-[0.6em] italic">@purinkokoa_</p>
          </div>
        </Link>
        <NavLinks />
      </div>
      <ShareAndSound />
    </div>
  );
};

export default Navbar;
