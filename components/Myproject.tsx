import Image from "next/image";
import lev from "../public/lev.png";

const Myproject = () => {
    return (
        <section className="text-gray-700 bg-slate-100 body-font" id="firstsection">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                    <Image alt="logo" src={lev}
                           className="object-cover object-center rounded bk: accent-red-200 max-w-xs hover:scale-110 transition duration-300 ease-in-out "
                           width={1000}
                           height={1000}/>
                </div>
                <div
                    className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <div className="mb-1 text-base font-medium">HTML</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-gray-600 h-2.5 rounded-full w-2/4"></div>
                    </div>

                    <div className="mb-1 text-base font-medium text-blue-700">CSS</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full w-2/4"></div>
                    </div>

                    <div className="mb-1 text-base font-medium text-red-700">PHP</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                        <div className="bg-red-600 h-2.5 rounded-full w-2/4"></div>
                    </div>

                    <div className="mb-1 text-base font-medium text-green-700">REACT</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full w-2/4"></div>
                    </div>

                    <div className="mb-1 text-base font-medium text-yellow-700">SQL</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-yellow-400 h-2.5 rounded-full w-2/4"></div>
                    </div>

                    <div className="mb-1 text-base font-medium text-indigo-700"> JS</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-indigo-600 h-2.5 rounded-full w-2/4"></div>
                    </div>

                    <div className="mb-1 text-base font-medium text-purple-700">GIT</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-purple-600 h-2.5 rounded-full w-2/4"></div>
                    </div>

                </div>

            </div>
        </section>
    )
}
export default Myproject