'use client'

import { useEffect, useState } from "react";
import Navbar from "../navbar/page";
import Link from "next/link";
import bg from "../../images/about.png"
import Image from "next/image";

export default function Creator() {
    const [show1, setShowButton1] = useState(false);
    const [show2, setShowButton2] = useState(false);
    const [show3, setShowButton3] = useState(false);
    const [show4, setShowButton4] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowButton1(true);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, []);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowButton2(true);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);


    return (
        <div>
            <div>
                <Navbar />
                <div className='flex flex-wrap justify-around h-[100%] items-center m-5' >
                    <div className='justify-center text-center w-fit m-auto center-container'>

                        <div className={`button-container ${show1 ? 'fade-in' : ''}`}>
                            <div className=" text-justify rounded-3xl p-5 ">
                                <p className="text-4xl font-mono mb-1 imganim font-semibold">Ready to become a Creator...</p>
                                <hr className="border-2 border-gray-400" />
                                <span className="font-sans text-2xl">Join our exclusive Ambassador Program and unlock a world of opportunities to amplify your influence and connect with a global community of like-minded creators.
                                    <br />
                                    As an ambassador, you will gain access to cutting-edge tools and resources designed to enhance your content creation journey. From personalized insights to tailored strategies, our team is dedicated to empowering you every step of the way. 🔥
                                    <br />
                                    <br />
                                    <b>
                                        ➡️Ready to take your content to the next level? Join our Ambassador Program today and lets make magic together⬅️.
                                    </b>
                                </span>
                                <hr className="border-2 border-gray-400" />
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center m-auto">

                            <div className={`button-container ${show2 ? 'fade-in' : ''} mt-10 `}>
                                <Link href='https://forms.gle/eS2xjnhvvkoTZeUe8'>
                                    <button className="hover:bg-sky-950 rounded-3xl p-5 hover:text-white shadow-lg shadow-cyan-800 text-sky-950 bg-slate-200 duration-500">
                                        <p className="text-4xl font-mono mb-1 imganim font-semibold text-red-500">Fill the Form</p>
                                        <span className="font-mono text-2xl">To become the Creator of CBC in your college...🙌🏻</span>
                                    </button>
                                </Link>
                            </div>

                            <div className='m-5'>
                                <Image src={bg} alt="background" className='rounded-full' />
                            </div>

                        </div>

                    </div>

                    <div>


                    </div>
                </div>
            </div>
        </div>
    );
}