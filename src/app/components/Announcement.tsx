import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const liveList = [
  {
    time: new Date(),
    title: "Ini Game Horror? 【Panicore!】",
    href: "https://www.youtube.com/watch?v=tzhhMp61460"
  },
  {
    time: new Date(),
    title: "【SuRin Time!】 Kebiasaan Kalian Red Flag atau Green Flag sih?",
    href: "https://www.youtube.com/watch?v=LyMIs5c7G9g"
  },
  {
    time: new Date(),
    title: "【Handstream】 Selsain Rakit Gunpla! MG Wing Gundam Zero EW “Ver.Ka” #3",
    href: "https://www.youtube.com/watch?v=XXW98nlLkcs"
  }
]

const Announcement = () => {
  return (
    <div className="relative group">
      {/* Message container */}
      <div className={`group-hover:visible top-[-${(((liveList.length) - 1) * 100).toString()}%] left-0 z-20 absolute bg-[#b06fce] opacity-0 group-hover:opacity-100 w-full transition-opacity duration-500 invisible`}>
        {liveList.slice(1, 3).map((item) => (
          <Link
            target="_blank"
            href={item.href}
            key={item.title}
            className="flex justify-between items-center px-8 py-3 text-sm text-white"
          >
            <p className="space-x-4">
              <span className="font-semibold text-xs tracking-wide">{item.time.toLocaleDateString()}</span>
              <span>{item.title}</span>
            </p>
          </Link>
        ))}
      </div>
      {/* Main content */}
      <div className="relative z-10 bg-[#b06fce]">
        <Link href={liveList[0].href} target="_blank" className="flex justify-between items-center px-8 py-3 text-sm text-white">
          <p className="space-x-4">
            <span className="font-semibold text-xs tracking-wide">{liveList[0].time.toLocaleDateString()}</span>
            <span>{liveList[0].title}</span>
          </p>
          <span>View <AiOutlineArrowRight className="inline" /></span>
        </Link>
      </div>
    </div>
  );
};

export default Announcement;