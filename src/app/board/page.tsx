'use client'

import { useEffect, useState } from "react";
import Navbar from "../navbar/page";
import Link from "next/link";
import Image from "next/image";
import bg from "../../images/centerbg2.png";

export default function Board() {
  const [show1, setShowButton1] = useState(false);
  const [show2, setShowButton2] = useState(false);
  const [show3, setShowButton3] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowButton1(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowButton2(true);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowButton3(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className=" flex flex-col justify-center">
      <Navbar />
      <div className="flex flex-wrap justify-center items-center m-5">
        <div className="center-container w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-5">
          <div className="flex flex-wrap justify-center text-center">
            <div className={`button-container ${show1 ? 'fade-in' : ''} mt-5`}>
              <Link href="/zone">
                <button className="bg-slate-200 hover:bg-sky-950 rounded-3xl p-5 hover:text-white shadow-lg shadow-cyan-800 text-sky-950 transition duration-300 ease-in-out">
                  <p className="text-4xl font-mono mb-1 imganim font-semibold">Poems 🌠</p>
                </button>
              </Link>
            </div>
            <div className={`button-container ${show2 ? 'fade-in' : ''} mt-5`}>
              <Link href="/course">
                <button className="bg-slate-200 hover:bg-sky-950 rounded-3xl p-5 hover:text-white shadow-lg shadow-cyan-800 text-sky-950 transition duration-300 ease-in-out">
                  <p className="text-4xl font-mono mb-1 imganim font-semibold">Short Story</p>
                </button>
              </Link>
            </div>
            <div className={`button-container ${show3 ? 'fade-in' : ''} mt-5`}>
              <Link href="https://chat.whatsapp.com/F477YxTNkmT2sJuAaNaGDa">
                <button className="bg-slate-200 hover:bg-sky-950 rounded-3xl p-5 hover:text-white shadow-lg shadow-cyan-800 text-sky-950 transition duration-300 ease-in-out">
                  <p className="text-4xl font-mono mb-1 font-semibold imganim">Episodes🔥</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}