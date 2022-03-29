import Scroll from "../public/Scroll.png";
import Image from "next/image";

const ServicesImg = () => {
    return (
        <section
            className="section--hero min-h-screen bg-cover   bg-fixed bg-no-repeat bg-bottom  flex flex-col items-center justify-center  bg-[url('/header.png')] ">
            <div className="container text-center px-4">
                <h1 className="sm:text-5xl font-serif sm:mb-12 text-4xl mb-4  text-white">My Projects </h1>
            </div>
            <div>
                <a href="#top">
                    <svg className="h-8 w-8 text-gray-50    animate-bounce w-6 h-6" width="24"
                         height="24"
                         viewBox="0 0 24 24"
                         stroke-width="2"
                         stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <circle cx="12" cy="12" r="9"/>
                        <line x1="8" y1="12" x2="12" y2="16"/>
                        <line x1="12" y1="8" x2="12" y2="16"/>
                        <line x1="16" y1="12" x2="12" y2="16"/>
                    </svg>
                </a>

            </div>
        </section>


    )
}
export default ServicesImg





















