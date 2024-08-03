import Link from "next/link";
import { Permanent_Marker } from "next/font/google";
import { LiaDiscord } from "react-icons/lia";
import { LuCat } from "react-icons/lu";
import { MdHorizontalRule } from "react-icons/md";

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});

const Carousel = () => {
  return (
    <div className="flex flex-col w-128 overflow-hidden">
      <div className="flex">
        <Link href={""} className="block bg-[#7289da] px-16 p-8 border rounded-md h-full text-center text-white">
          <h1 className={`${permanentMarker.className} text-base font-bold`}>
            <LiaDiscord className="inline" /> Purin&lsquo;s Apse <LuCat className="inline" />
          </h1>
          <p className="mt-1 text-neutral-200 text-xs">Join Our Discord Community!</p>
        </Link>
      </div>
      <div className="flex justify-center text-4xl text-white">
        <MdHorizontalRule />
        <MdHorizontalRule />
        <MdHorizontalRule />
      </div>
    </div>
  );
};

export default Carousel;
