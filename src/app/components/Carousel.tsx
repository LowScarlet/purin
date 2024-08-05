import Link from "next/link";
import { Permanent_Marker } from "next/font/google";
import { LiaDiscord } from "react-icons/lia";
import { LuCat } from "react-icons/lu";
import { MdHorizontalRule } from "react-icons/md";
import { useState } from "react";

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});

const Banner = ({
  index,
  opacity
}: {
  index: number,
  opacity: number
}) => {
  const list = [
    <Link href={""} key={"asd"} className={`flex flex-col justify-center bg-[#7289da] px-16 p-8 border rounded-md h-full text-center text-white transition-opacity duration-500 opacity-${opacity}`}>
      <h1 className={`${permanentMarker.className} text-base font-bold`}>
        <LiaDiscord className="inline" /> Purin&lsquo;s Apse <LuCat className="inline" />
      </h1>
      <p className="mt-1 text-neutral-200 text-xs">Join Our Discord Community!</p>
    </Link>,

    <Link href={""} key={"asd2"} className={`flex flex-col justify-center bg-[#cc72da] px-16 p-8 border rounded-md h-full text-center text-white transition-opacity duration-500 opacity-${opacity}`}>
      <h1 className={`${permanentMarker.className} text-base font-bold`}>
        <LiaDiscord className="inline" /> Purin&lsquo;s Apse <LuCat className="inline" />
      </h1>
      <p className="mt-1 text-neutral-200 text-xs">Join Our Discord Community!</p>
    </Link>,

    <Link href={""} key={"asd3"} className={`flex flex-col justify-center bg-[#da7298] px-16 p-8 border rounded-md h-full text-center text-white transition-opacity duration-500 opacity-${opacity}`}>
      <h1 className={`${permanentMarker.className} text-base font-bold`}>
        <LiaDiscord className="inline" /> Purin&lsquo;s Apse <LuCat className="inline" />
      </h1>
      <p className="mt-1 text-neutral-200 text-xs">Join Our Discord Community!</p>
    </Link>,
  ]
  return (
    list[index]
  );
};

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const handleTransition = (newIndex: number) => {
    setOpacity(0);
    setTimeout(() => {
      setIndex(newIndex);
      setOpacity(1);
    }, 200);
  };

  return (
    <div className="flex flex-col w-128 overflow-hidden">
      <div className="w-80 h-32">
        <Banner index={index} opacity={opacity} />
      </div>
      <div className="flex justify-center text-4xl text-white">
        <MdHorizontalRule onClick={() => handleTransition(0)} className="cursor-pointer" />
        <MdHorizontalRule onClick={() => handleTransition(1)} className="cursor-pointer" />
        <MdHorizontalRule onClick={() => handleTransition(2)} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Carousel;