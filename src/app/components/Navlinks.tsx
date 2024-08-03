import Link from "next/link";

const navLinks = [
  { display: "News", href: "" },
  { display: "About", href: "" },
  { display: "Community", href: "" },
  { display: "Special", href: "" },
  { display: "Disclaimer", href: "" },
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
