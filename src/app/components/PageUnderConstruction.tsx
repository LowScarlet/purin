import Link from "next/link";
import { Permanent_Marker } from "next/font/google";

const PageUnderConstruction = () => {
  return (
    <div className="flex justify-center items-center h-svh">
      <div className="text-center">
        <h1 className="font-bold text-4xl">Page Under Construction</h1>
        <p className="text-sm">Interested in developing this website? Chat <Link target="_blank" href={"https://www.instagram.com/low_scarlet/"}>@LowScarlet</Link></p>
      </div>
    </div>
  );
};

export default PageUnderConstruction;
