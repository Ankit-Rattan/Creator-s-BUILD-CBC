'use client'

import { useEffect, useState } from "react";
import Navbar from "../navbar/page";
import Link from "next/link";
import bg from "../../images/centerbg2.png"
import Image from "next/image";

export default function CenterNav() {
    const [show1, setShowButton1] = useState(false);
    const [show2, setShowButton2] = useState(false);
    const [show3, setShowButton3] = useState(false);
    const [show4, setShowButton4] = useState(false);
  
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
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setShowButton4(true);
      }, 2000);
  
      return () => clearTimeout(timeoutId);
    }, []);
  
    return (
      <div>
        <div>
          <div className='flex flex-wrap justify-around h-[100%] items-center m-5' >
          <div className='justify-center text-center w-fit m-auto center-container'>
            
            <div className={`button-container ${show1 ? 'fade-in' : ''}`}>
              <Link href='/zone'>
                <button className=" hover:bg-sky-950 rounded-3xl p-5 hover:text-white shadow-lg shadow-cyan-800 text-sky-950 bg-slate-200">                  
                  <p className="text-4xl font-mono mb-1 imganim font-semibold">Creator Zone</p>
                  <span className="font-mono text-2xl">No worries We are here to elevate your profile <br/> with real-time analytics and feedback to supercharge your content.</span>
                </button>
              </Link>
            </div>
            <div className={`button-container ${show2 ? 'fade-in' : ''} mt-[5rem]`}>
              <Link href='/course'>
                <button className=" hover:bg-sky-950 rounded-3xl p-5 hover:text-white shadow-lg shadow-cyan-800 text-sky-950 bg-slate-200">                  
                  <p className="text-4xl font-mono mb-1 imganim font-semibold">Courses</p>
                  <span className="font-mono text-2xl">Boost your skills... Check it OUT!</span>
                </button>
              </Link>
            </div>
            <div className={`button-container ${show3 ? 'fade-in' : ''} mt-[5rem]`}>
              <Link href='https://chat.whatsapp.com/F477YxTNkmT2sJuAaNaGDa'>
                <button className="hover:bg-sky-950 rounded-3xl p-5 hover:text-white shadow-lg shadow-cyan-800 text-sky-950 bg-slate-200" >
                  <p className="text-4xl font-mono mb-1 font-semibold imganim">Community</p>
                  <span className="font-mono text-2xl">To chat with others and learn from their experience </span>
                  </button>
              </Link>
            </div>
            <div className={`button-container ${show4 ? 'fade-in' : ''} mt-[5rem]`}>
              <Link href='https://createbycreators.podia.com/blog'>
                <button className="hover:bg-sky-950 rounded-3xl p-5 hover:text-white shadow-lg shadow-cyan-800 text-sky-950 bg-slate-200" >
                  <p className="text-4xl font-mono font-semibold mb-1 imganim">Blogs | Bytes</p>
                  <span className="font-mono text-2xl">Read the blogs to stay updates... and well time to flex your colleague 😉</span>
                  </button>
              </Link>
            </div>
          </div>

  
          <div>
          
  
          </div>
          </div>
        </div>
      </div>
    );
}