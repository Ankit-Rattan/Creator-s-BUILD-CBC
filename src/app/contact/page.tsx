import Link from "next/link";
import Logo from "../logo/page";
import Logobg from "../logobg/page";

export default function Contact() {
    return (
        <div className="h-[100%] bg-black" id="contact">
          <div>
            <div className=" justify-between text-center items-center">
              <div>
                <h1 className="text-center text-[3rem] items-center font-mono font-semibold m-[1rem] text-white">
                  Connect with us
                </h1>
              </div>
              <div></div>
            </div>
          </div>
          <div className=" flex flex-wrap gap-5 text-center text-[2rem] justify-evenly mt-[10vh]">
            <Link href="https://www.linkedin.com/company/createbycreators/">
            <div className="bg-black text-blue-400 p-[1rem] border hover:bg-blue-400 hover:text-black border-blue-400 shadow-2xl shadow-blue-400 rounded-full cursor-pointer font-mono imganim duration-500">
              📘 Linkedin
            </div>
            </Link>
            <Link href="https://chat.whatsapp.com/F477YxTNkmT2sJuAaNaGDa">
            <div className=" text-red-400 shadow-2xl border border-red-400 shadow-red-400 p-[1rem] hover:bg-red-400 hover:text-black rounded-full cursor-pointer font-mono imganim duration-500">
              😺 Chat with us
            </div>
            </Link>
            <div className="bg-black text-amber-200 shadow-2xl border border-amber-200 hover:bg-amber-200 hover:text-black shadow-amber-200 p-[1rem] rounded-full cursor-pointer font-mono buttonmove duration-500">
              ✖️/Twitter{" "}
            </div>
            <Link href="https://createbycreators.podia.com/">
            <div className="bg-black text-slate-300 p-[1rem] border border-slate-300 shadow-2xl hover:bg-slate-200 hover:text-black shadow-slate-300 rounded-full cursor-pointer font-mono buttonmove duration-500">
              ➿ Our Course
            </div>
            </Link>
          </div>
         <div className="bg-white flex justify-center items-center mt-[5rem]">
            <Logobg/>
         </div>
        </div>
      );
}