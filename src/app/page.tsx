import { Flavors, Permanent_Marker } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight, AiOutlineInstagram, AiOutlineTikTok, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { FaDiscord, FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { LiaDiscord } from "react-icons/lia";
import { LuCat } from "react-icons/lu";
import { MdHorizontalRule } from "react-icons/md";

const flavors = Flavors({
  subsets: ["latin"],
  weight: "400"
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400"
});

const nav = [
  {
    display: "News",
    href: ""
  },
  {
    display: "About",
    href: ""
  },
  {
    display: "Community",
    href: ""
  },
  {
    display: "Special",
    href: ""
  },
  {
    display: "Disclaimer",
    href: ""
  },
]

const news = [
  {
    dateTime: new Date(),
    display: "I Am Part Time Worker!!",
    href: ""
  },
  {
    dateTime: new Date(),
    display: "I Am Part Time Worker!!",
    href: ""
  },
]

const share = [
  {
    Icon: FaXTwitter,
    href: ""
  },
  {
    Icon: AiOutlineInstagram,
    href: ""
  },
  {
    Icon: AiOutlineTikTok,
    href: ""
  }
]

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between h-svh">
        <div
          style={{
            backgroundImage: `url('/bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundPositionY: "top",
          }}
          className="bg-cover custom-cursor w-full grow"
        >
          <div className="flex flex-col justify-between h-full text-center">
            <div className="py-12 text-white">
              <h1 className={permanentMarker.className + " text-[#b06fce] text-7xl font-bold text-stoke drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"} >Purin Kokoa</h1>
              <p className={"flex justify-center items-center text-base font-semibold mt-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"}><AiOutlineYoutube className="mr-1 text-xl" /> PurinKokoa_</p>
            </div>
            <div className="flex justify-between mx-4 my-4">
              <div>
                <div>
                  <Link href={""} className="block bg-[#b06ecf] px-16 p-8 border rounded-md h-full text-center text-white normal-case">
                    <h1 className={permanentMarker.className + " text-base font-bold"}><LiaDiscord className="inline" /> Purin&lsquo;s Apse <LuCat className="inline" /></h1>
                    <p className="mt-1 text-neutral-200 text-xs">Join Our Discord Community!</p>
                  </Link>
                </div>
                <div className="flex justify-center text-4xl text-white">
                  <MdHorizontalRule />
                  <MdHorizontalRule />
                  <MdHorizontalRule />
                </div>
              </div>
              <div className="flex items-end">
                <div className="border-[#b06ecf] border-2 bg-[#b06ecf] rounded-full overflow-hidden">
                  <Image width={96} height={96} src={"/pp.jpg"} alt={""} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#b06fce]">
            <Link
              href={""}
              className="flex justify-between items-center px-8 py-3 text-sm text-white"
            >
              <p className="space-x-4">
                <span className="font-semibold text-xs tracking-wide">2024 / 8 / 2</span> <span>I Am Part Time Worker!!</span>
              </p>
              <span>
                View <AiOutlineArrowRight className="inline" />
              </span>
            </Link>
          </div>
          <div className="py-1 border border-b-2">
            <div className="flex justify-between items-center mx-8 my-6 font-semibold text-neutral-500 text-sm uppercase">
              <div className="flex flex-row space-x-8">
                {
                  nav.map((item) => (
                    <Link href={item.href} key={item.display} className="block hover:text-[#b06fce] transition duration-300 ease-in-out">{item.display}</Link>
                  ))
                }
              </div>
              <div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <p className="text-xs">
                      Share
                    </p>
                    <div className="flex gap-x-4 text-2xl ms-8">
                      {
                        share.map((item) => (
                          <Link href={item.href} key={item.href} className="block hover:text-[#b06fce] transition duration-300 ease-in-out">
                            <item.Icon />
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                  <div className="mx-8">
                    |
                  </div>
                  <div className="flex items-center">
                    <p className="text-xs">
                      Sound
                    </p>
                    <div className="flex gap-x-4 text-2xl ms-8">
                      <HiMiniSpeakerWave />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="flex justify-between mx-8 py-8 font-semibold text-neutral-500 text-xs uppercase">
        <div>
          <div className="flex">
            <div className="space-x-4">
              <Link href={""}>
                EN
              </Link>
              <Link href={""}>
                ID
              </Link>
            </div>
            <div className="mx-6">
              |
            </div>
            <div className="space-x-4">
              <Link href={""}>
                Purin Kokoa
              </Link>
              <Link href={""}>
                CONTACT
              </Link>
              <Link href={""}>
                PRIVACY POLICY
              </Link>
            </div>
          </div>
          <div className="mt-4">
            <div className="space-x-2 font-semibold">
              <Link href={""} className="text-[#c384ec]">
                Purin Kokoa
              </Link>
              <Link href={""} className="text-[#c384ec]">
                著作権に関するガイドライン
              </Link>
            </div>
            <div>
              <p className="text-[0.8em] text-neutral-400 normal-case">© LowScarlet 2024. All rights reserved.</p>
            </div>
          </div>
        </div>
        <div>
          <Link href={""} className="block bg-[#b06ecf] px-16 p-2 border rounded-md h-full text-center text-white normal-case">
            <h1 className={permanentMarker.className + " text-base font-bold"}><LiaDiscord className="inline" /> Purin&lsquo;s Apse <LuCat className="inline" /></h1>
            <p className="mt-1 text-neutral-200 text-xs">Join Our Discord Community!</p>
          </Link>
        </div>
      </div>
    </>
  );
}