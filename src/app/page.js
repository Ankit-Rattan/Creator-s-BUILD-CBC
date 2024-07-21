import About from "./about/page";
import CenterNav from "./centerNav/page";
import Contact from "./contact/page";
import Main from "./main/page";
import Navbar from "./navbar/page";
import Customer from "./customer/page";


export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Customer />
      <CenterNav />
      <Contact />
    </>
  );
}
