import Image from "next/image";
import img from "../public/img.png";
import hobbies from "../public/hobbies.png";
import Link from "next/link";

const AboutInfo = () => {
    return (
        <>
            <section className="text-gray-700 body-font" id="firstsection">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                    <div
                        className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Me
                        </h1>
                        <p className="mb-8 leading-relaxed" id="#top">
                            hen in Syria I studied electrical engineering at the university for a year, but due to
                            circumstances such as freedom in my country, I was unable to complete my studies, so I
                            decided to go to a country where I could complete my studies. I traveled to the Netherlands.
                            Honik had difficulties in order to complete my studies and one of the most important
                            difficulties of the Dutch language. In six months, I got a degree in language, and then I
                            started studying the computer field and dreaming now that I became a successful programmer


                        </p>
                        <div className="flex justify-center">
                            <Link href='/Cv'>
                                <a className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg '>
                                    LOOK My Cv
                                </a>
                            </Link>


                        </div>
                    </div>
                    <div
                        className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                        <Image alt="logo" src={img}
                               className="object-cover object-center rounded bk: accent-red-200 max-w-xs hover:scale-110 transition duration-300 ease-in-out "
                               width={1000}
                               height={1000}/>
                    </div>
                </div>
            </section>

            <section className="text-gray-700 bg-slate-200 body-font" id="firstsection">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                        <Image alt="logo" src={hobbies}
                               className="object-cover object-center rounded bk: accent-red-200 max-w-xs hover:scale-110 transition duration-300 ease-in-out "
                               width={1000}
                               height={1000}/>
                    </div>
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hobbies
                        </h1>
                        <p className="mb-8 leading-relaxed" id="tagline">
                            Sport:
                            I love sport so I am a member at one gym I do football when I have time.
                        </p>
                        <p className="mb-8 leading-relaxed" id="tagline">

                            Read :
                            I like reading books about history which I find very interesting.

                        </p>
                        <p className="mb-8 leading-relaxed" id="tagline">
                            Travel:
                            I like to get more experience by traveling.


                        </p>
                        <p className="mb-8 leading-relaxed" id="tagline">
                            horse riding:
                            I love riding and it is one of my best hobbies

                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutInfo



