import Link from "next/link";
import { AiOutlineInstagram, AiOutlineTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { HiMiniSpeakerWave } from "react-icons/hi2";

const shareIcons = [
  { Icon: FaXTwitter, href: "https://x.com/purinkokoa_" },
  { Icon: AiOutlineInstagram, href: "https://www.instagram.com/purinkokoa_" },
  { Icon: AiOutlineTikTok, href: "https://www.tiktok.com/@purinkokoa" },
];

const ShareAndSound = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <p className="text-xs">Share</p>
        <div className="flex gap-x-4 text-2xl ms-8">
          {shareIcons.map((item) => (
            <Link href={item.href} key={item.href} target="_blank" className="block hover:text-[#b06fce] transition duration-300 ease-in-out">
              <item.Icon />
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-8">|</div>
      <div className="flex items-center">
        <p className="text-xs">Sound</p>
        <div className="flex gap-x-4 text-2xl ms-8">
          <Link href={""} className="block hover:text-[#b06fce] transition duration-300 ease-in-out">
            <HiMiniSpeakerWave />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShareAndSound;
