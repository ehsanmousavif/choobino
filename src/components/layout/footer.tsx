import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full flex-col">
            <div className="relative w-full h-72">
                <Image src={'/images/footer-image.jpg'} alt="footer image" fill className="object-cover"/>
            </div>            

            <div className="w-full p-52 bg-[linear-gradient(90deg,rgba(163,88,26,1)_0%,_rgba(0,0,0,1)_24%,_rgba(0,0,0,1)_50%,_rgba(0,0,0,1)_75%,_rgba(163,88,26,1)_100%)]"></div>
        </footer>
      );
}
 
export default Footer;