import Link from "next/link";

const navLinks = [
  { display: "News", href: "/news" },
  { display: "About", href: "/about" },
  { display: "Schedule", href: "/schedule" },
  { display: "Community", href: "/community" },
  { display: "Disclaimer", href: "/disclaimer" },
];

const NavLinks = () => {
  return (
    <div className="flex space-x-8">
      {navLinks.map((item) => (
        <Link href={item.href} key={item.display} className="block hover:text-[#b06fce] transition duration-300 ease-in-out">
          {item.display}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
