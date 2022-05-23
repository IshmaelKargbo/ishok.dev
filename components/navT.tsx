import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

const NavLink = ({ href, children }) => {
    const route = useRouter();
    return <Link href={href}><a className={route.asPath === href ? 'text-prim' : ''}>{children}</a></Link>
}

export const AppNav = () => {
    const [sticky, setSticky] = useState('relative')
    const [menu, setMenu] = useState(false);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 68 ? setSticky('fixed top-0 left-0 z-50 w-full border-b') : setSticky('relative');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const router = useRouter();

    useEffect(() => {
        document.body.style.overflow = 'auto';
        setMenu(false);
    }, [router])

    const toggleMenu = () => {
        document.body.style.overflow = !menu ? 'hidden' : 'auto';
        setMenu(!menu);
    }

    return (

        <header className={`bg-white ${sticky}`}>
            <nav className="flex items-center container mx-auto md:px-36 px-6 py-5 justify-between">
                <div>
                    <img src="../logo.png" alt="soprt zone" className="w-16" />
                </div>
                <ul className="items-center text-sm text-gray-400 font-heading hidden md:flex">
                    <li className="px-5"><NavLink href='/#about'>About</NavLink></li>
                    <li className="px-5"><NavLink href='/#courts'>Courts</NavLink></li>
                    <li className="px-5"><NavLink href='/#testimoials'>Testimonials</NavLink></li>
                    <li className="px-5"><NavLink href='/#register'>Register</NavLink></li>
                    <li className="px-5">Booking</li>
                </ul>
                <button onClick={toggleMenu} className="bg-sec p-2 text-xl text-white md:hidden">
                    <HiOutlineMenuAlt1 />
                </button>
            </nav>
            {
                menu ? <div className="bg-white fixed md:hidden w-full h-screen z-50 flex top-0">
                    <div className="relative overflow-x-auto flex-1">
                        <button onClick={toggleMenu} className="absolute right-6 top-6 focus:outline-none"><GrClose /></button>
                        <nav className="pt-28 px-8">
                            <ul>
                                <li className="mb-10 text-lg"><NavLink href='/#about'>About</NavLink></li>
                                <li className="mb-10 text-lg"><NavLink href='/#courts'>Courts</NavLink></li>
                                <li className="mb-10 text-lg"><NavLink href='/#testimoials'>Testimonials</NavLink></li>
                                <li className="mb-10 text-lg"><NavLink href='/#register'>Register</NavLink></li>
                                <li className="mb-10 text-lg">Booking</li>
                            </ul>
                        </nav>
                    </div>
                </div> : null
            }
        </header>
    );
}