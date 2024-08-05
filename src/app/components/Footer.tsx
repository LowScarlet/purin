import Link from "next/link";
import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="flex justify-between mx-8 py-8 font-semibold text-neutral-500 text-xs uppercase">
      <div>
        <div className="flex space-x-4">
          <Link href={""}>EN</Link>
          <Link href={""}>ID</Link>
          <div className="mx-6">|</div>
          <Link href={""}>Purin Kokoa</Link>
          <Link href={""}>CONTACT</Link>
          <Link href={""}>PRIVACY POLICY</Link>
        </div>
        <div className="space-x-2 mt-4 font-semibold">
          <Link href={""} className="text-[#c384ec]">Purin Kokoa</Link>
          <Link href={""} className="text-[#c384ec]">著作権に関するガイドライン</Link>
        </div>
        <p className="text-[0.8em] text-neutral-400 normal-case">© LowScarlet 2024. All rights reserved.</p>
      </div>
      <div className="flex items-end gap-x-4 text-4xl">
        <SiVercel />
        <SiNextdotjs />
        <SiTailwindcss />
      </div>
    </footer>
  );
};

export default Footer;
