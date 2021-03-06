import Link from 'next/link';
import {useState} from 'react';

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <html>
            <head>
                <link rel="stylesheet" href="../styles/saas.module.scss"/>

            </head>
            <body>
            <nav className='flex items-center flex-wrap bg-zinc-700 p-3  '>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-current text-white h-6 w-6 mr-2'
                             viewBox="0 0 20 25"
                             stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"/>
                        </svg>
                        <span className='text-xl text-white font-bold uppercase tracking-wide'>
              Ahmed Alothman
            </span>
                    </a>
                </Link>
                <button
                    className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div
                    className={`${
                        active ? '' : 'hidden'
                    }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div
                        className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-400 hover:text-white '>
                                Home
                            </a>
                        </Link>
                        <Link href='/About'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-400 hover:text-white'>
                                About us
                            </a>
                        </Link>
                        <Link href='/Services'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-400 hover:text-white'>
                                Projects
                            </a>
                        </Link>
                        <Link href='/Contact'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-400 hover:text-white'>
                                Contact us
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
            </body>

            </html>
        </>
    );
};

export default Navbar
