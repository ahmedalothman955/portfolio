import Image from "next/image";
import img from "../public/img.png";
import laptop from "../public/laptop.png";
import Link from "next/link";

const BoxInfo = () => {
    return (


        <section className="text-gray-700 body-font" id="firstsection">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                    <Image alt="logo" src={img}
                           className="object-cover object-center rounded bk: accent-red-200 max-w-xs hover:scale-110 transition duration-300 ease-in-out "
                           width={1000}
                           height={1000}/>
                </div>
                <div
                    className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> How am I ?
                    </h1>
                    <p className="mb-8 leading-relaxed" id="tagline">

                        My name is Ahmed Alothman and I come from syria


                    </p>
                    <div className="flex justify-center">
                        <Link href='/About'>
                            <a className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg '>
                                Read more ..
                            </a>
                        </Link>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default BoxInfo



