'use client'

import { useEffect, useState } from "react";
import Navbar from "../navbar/page";
import Link from "next/link";
import Image from "next/image";
import pers from "../../images/persCourse.jpg"
import norm from "../../images/norCourse.jpg"
import course from "../../images/course.png"


export default function Center() {
    const [show1, setShowButton1] = useState(false);
    const [show2, setShowButton2] = useState(false);

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

    return (
        <div>
            <Navbar />
            <div className='flex flex-wrap justify-around items-center m-5'>
                <div>
                    <h2 className="text-3xl m-[2rem] font-semibold text-center">Content Development Course for Beginners</h2>
                    <div className='flex flex-wrap  justify-center text-center w-full space-x-5'>


                        <div className={`card ${show1 ? 'fade-in' : ''} max-w-sm w-full`}>
                        <Link href='https://createbycreators.gumroad.com/l/course'>
                        <div className="hover:bg-sky-950 rounded-3xl p-5 hover:text-white shadow-lg shadow-cyan-800 bg-slate-200">
                                    <Image src={course} alt="course" width={500} height={500} className="m-auto rounded-md" />
                                </div>
                            </Link>
                            <p className="text-3xl mt-5 font-mono  font-semibold text-red-600">Course on Content Development</p>
                            <p className="text-2xl font-mono  font-semibold text-black">More Personalized course.</p>
                        </div>

                        <div className={`card ${show2 ? 'fade-in' : ''} max-w-sm w-full`}>
                            <Link href='https://www.getege.com/course/content-development-for-beginners'>
                                <div className="hover:bg-sky-950 rounded-3xl p-5 hover:text-white shadow-lg shadow-cyan-800 bg-slate-200">
                                    <Image src={course} alt="Courses" width={500} height={500} className="m-auto rounded-md" />
                                </div>
                            </Link>
                            <p className="text-3xl mt-5 font-mono  font-semibold text-red-600">Course on Content Development</p>
                            <p className="text-2xl font-mono  font-semibold text-black">Normal course.</p>
                        </div>

                    </div>
                    <div>
                            <p className="text-2xl mt-5 font-mono mb-1   text-black"> <b>NOTE</b> : Discover exclusive seasonal offers available now!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
