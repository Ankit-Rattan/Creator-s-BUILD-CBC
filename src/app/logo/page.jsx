import Link from "next/link";
import img from "../../images/CBCround.png"
import Image from "next/image";

export default function Logo() {
  return (
    <>
        <div>
            <div className='p-0 ml-2 '>
                <Link href='/' >
                <div className='rounded-full w-24 m-0'>
            <Image src={img} alt='logo' width={96} height={96} />
            </div>
                </Link>
            </div>
        </div>
    </>
  );
}