'use client'

import { useEffect, useState } from "react";
import Navbar from "../navbar/page";
import Link from "next/link";
import bg from "../../images/about.png"
import zone from "../../images/zone.png"
import zone1 from "../../images/zone-1.png"
import Image from "next/image";

export default function Zone() {
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
                    <div className='justify-center text-center w-fit m-auto center-container bg-slate-200 shadow-inner'>
                        
                        <div className={`button-container ${show1 ? 'fade-in' : ''}`}>
                            <div className=" text-justify rounded-3xl p-5 ">
                                <p className="text-4xl font-mono mb-1 imganim font-semibold">Want to Grow your BRAND❗</p>
                                <hr className="border-2 border-gray-400" />
                                <span className="font-sans text-2xl">No matter, if you are running <b> YOUTUBE </b> channel, <b>INSTAGRAM </b> page, or any other social media page and want to grow your brand ... We are here to elevate your profile with real-time analytics and feedback.
                                </span>
                                <hr className="border-2 border-gray-400" />
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center m-auto">

                        <div className={`button-container ${show1 ? 'fade-in' : ''}`}>
                            <div className=" text-justify rounded-3xl p-5 ">
                                <p className="text-4xl font-mono mb-1 imganim font-semibold">What we offer 🤔</p>
                                <hr className="border-2 border-gray-400" />
                                <span className="font-sans text-2xl"> - Our team analyze your content and prepare the structured result of your brand.
                                    <br/>
                                    - Not only that, we also help in building your personality and skills for your content. 
                                    <br/>
                                    - We also provide you with the feedback on your content.
                                    <br/>
                                    - We provide a proper statistical data of your content.
                                    <br/>
                                    - Future topics related to your domain brand, you can make to boost your channel or page.
                                </span>
                                <hr className="border-2 border-gray-400" />
                            </div>
                        </div>
                            <div className='m-auto imganim'>
                                <Image src={zone} alt="background" className='rounded-full' />
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-center m-auto">

                            <div className={`button-container ${show2 ? 'fade-in' : ''} mt-10 `}>
                                <Link href='https://forms.gle/vDRwgJsiguAvsBBb9'>
                                    <button className="hover:bg-sky-950 rounded-3xl p-5 hover:text-white shadow-lg shadow-cyan-800 text-sky-950 bg-slate-200 duration-500">
                                        <p className="text-3xl font-mono mb-1 imganim font-semibold text-red-500">Fill the Form</p>
                                        <span className="font-mono text-xl">To get the full analytics based feedback of your channel, page or brand</span>
                                    </button>
                                </Link>
                            </div>

                            <div className='imganim'>
                                <Image src={zone1} alt="background" className='rounded-full' />
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