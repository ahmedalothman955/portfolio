const Iframe = () => {
    return (

        <section className="text-gray-700 body-font relative">
            <div className="absolute inset-0 bg-gray-300">
                <iframe
                    scrolling="no"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.206571059062!2d5.172731515699208!3d52.02133438081669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c666e26b4a12d1%3A0xb355580715b42fd!2sDe%20Bouw%2C%20Houten!5e0!3m2!1sen!2snl!4v1648227097338!5m2!1sen!2snl"
                    className=" scroll-smooth  w-full h-full filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex ">
                <div
                    className="lg:w-1/3 md:w-1/2 bg-white rounded-lg  p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">

                    <p className="mb-8 leading-relaxed" id="tagline">
                        FullName : Ahmed Alothman
                    </p>
                    <p className="mb-8 leading-relaxed" id="tagline">
                        <svg className="h-8 w-8  tracking-tight text-red-500" width="24" height="24" viewBox="0 0 24 24"
                             stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <line x1="18" y1="6" x2="18" y2="6.01"/>
                            <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5"/>
                            <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15"/>
                            <line x1="9" y1="4" x2="9" y2="17"/>
                            <line x1="15" y1="15" x2="15" y2="20"/>
                        </svg>
                        PostCode : 3991 SX
                        dress : De Bouw-25
                    </p>
                    <p className="mb-8 leading-relaxed inline" id="tagline">
                        <svg className="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24"
                             stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <rect x="7" y="4" width="10" height="16" rx="1"/>
                            <line x1="11" y1="5" x2="13" y2="5"/>
                            <line x1="12" y1="17" x2="12" y2="17.01"/>
                        </svg>
                        : 0614043188
                    </p>
                    <p className="mb-8 leading-relaxed" id="tagline">
                        <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        E-mail:ahmedalothman966@gmail.com
                    </p>

                </div>
            </div>
        </section>

    )
}
export default Iframe