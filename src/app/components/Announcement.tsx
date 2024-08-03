import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";

const Announcement = () => {
  return (
    <div className="relative group">
      {/* Message container */}
      <div className="group-hover:visible top-[-200%] left-0 z-20 absolute bg-[#b06fce] opacity-0 group-hover:opacity-100 w-full transition-opacity duration-500 invisible">
        {[1, 2].map((item) => (
          <Link
            href={""}
            key={item}
            className="flex justify-between items-center px-8 py-3 text-sm text-white"
          >
            <p className="space-x-4">
              <span className="font-semibold text-xs tracking-wide">2024 / 8 / 2</span>
              <span>Halo</span>
            </p>
          </Link>
        ))}
      </div>
      {/* Main content */}
      <div className="relative z-10 bg-[#b06fce]">
        <Link href={""} className="flex justify-between items-center px-8 py-3 text-sm text-white">
          <p className="space-x-4">
            <span className="font-semibold text-xs tracking-wide">2024 / 8 / 2</span>
            <span>I Am Part Time Worker!!</span>
          </p>
          <span>View <AiOutlineArrowRight className="inline" /></span>
        </Link>
      </div>
    </div>
  );
};

export default Announcement;