'use client'

import { Permanent_Marker } from "next/font/google";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import Carousel from "./Carousel";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => { };

  const options: ISourceOptions = useMemo(
    () => ({
      "fullScreen": {
        "enable": false,
      },
      "particles": {
        "color": {
          "value": "#fff"
        },
        "move": {
          "direction": "bottom",
          "enable": true,
          "outModes": "out",
          "speed": 1
        },
        "number": {
          "density": {
            "enable": true,
            "area": 800
          },
          "value": 800
        },
        "opacity": {
          "value": 0.3
        },
        "shape": {
          "type": "circle"
        },
        "size": {
          "value": 10
        },
        "wobble": {
          "enable": true,
          "distance": 10,
          "speed": 10
        },
        "zIndex": {
          "value": {
            "min": 0,
            "max": 100
          }
        }
      }
    }),
    [],
  );

  if (!init) {
    return (
      <div className="bg-[#c988e7] h-full"></div>
    );
  }

  return (
    <header
      className="relative bg-cover custom-cursor w-full grow"
      style={{
        backgroundImage: `url('/bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <Particles
        particlesLoaded={particlesLoaded}
        options={options}
        className="z-10 absolute inset-0"
      />
      <div className="relative z-20 flex flex-col justify-between h-full text-center">
        <div className="py-12 text-white">
          <h1 className={`${permanentMarker.className} text-[#b06fce] text-7xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
            Purin Kokoa
          </h1>
          <p className="flex justify-center items-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-2 font-semibold text-base">
            <AiOutlineYoutube className="mr-1 text-xl" /> PurinKokoa_
          </p>
        </div>
        <div className="flex justify-between mx-4 my-4">
          <Carousel />
          <div className="flex items-end">
            <div className="border-[#b06ecf] border-2 bg-[#b06ecf] rounded-full overflow-hidden">
              <Image width={96} height={96} src={"/pp.jpg"} alt="Profile picture" quality={100} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
