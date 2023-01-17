import React, { useEffect, useState } from "react";
import { Nav } from "./nav.app";

export const LayoutApp = ({ children }) => {

    // const [sticky, setSticky] = useState('relative');

    // const stickNavbar = () => {
    //     if (window !== undefined) {
    //         let windowHeight = window.scrollY;
    //         if (window.innerWidth <= 767)
    //             windowHeight > 150 ? setSticky('fixed top-0 left-0 z-50 w-full') : setSticky('relative');
    //         else
    //             windowHeight > 215 ? setSticky('fixed top-0 left-0 z-50 w-full') : setSticky('relative');
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', stickNavbar);
    //     return () => window.removeEventListener('scroll', stickNavbar);
    // }, []);


    return (
        <div className="mt-5">
            <header className={`py-6 bg-main navbar`}>
                <Nav />
            </header>
            <main className="container mx-auto md:px-14">
                {children}
            </main>
        </div>
    );
}

export const Title = ({ title, count }) => {
    return (
        <div className="flex items-center mb-10 space-x-10">
            <div className="flex space-x-2">
                <p className="md:text-xl text-lg font-head text-sec no-select">{count}.</p>
                <p className="md:text-3xl text-xl font-semibold text-head whitespace-nowrap">{title}</p>
            </div>
            <div className="border-t h-1 border-gray-700 w-72"></div>
        </div>
    )
}