'use client';
import { useEffect, useState } from 'react';
import image from "../../images/mainTwo.png";
import Image from 'next/image';

export default function Main() {
  const [show, setShow] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 700);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!isClient) {
    // Render a fallback UI on the server
    return null;
  }

  return (
    <div className={`button-container ${show ? 'fade-in' : ''} mt-[5rem]`}>
      <div className="main m-5 h-[90vh]">
        <div className="flex justify-around flex-wrap">
          <div className="m-auto">
            <p className="font-extrabold font-mono text-8xl mb-3"></p>
            <p className="text-5xl flex gap-3 flex-wrap font-thin">
              Now!
              <p className="text-purple-800 font-normal">Creators</p> have
              their own place
            </p>
            <p className="text-4xl flex gap-3 flex-wrap font-thin">
              Other than <p className="text-red-500 font-mono">Work Place</p>
            </p>
          </div>
          <div className="mr-10 imganim">
            <Image src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
