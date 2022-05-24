import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

const Navlink = ({ href = '', title = '', count = '' }) => {
    const route = useRouter();

    return (
        <Link href={href} className="font-head sm-text">
            <a className="font-head sm-text flex">
                <span className="text-sec mr-2 no-select">{count}.</span>
                <span className={`hover:text-sec ${route.asPath === href ? 'text-sec' : 'text-head '}`}>{title}</span>
            </a>
        </Link>
    )
}

const MobNavlink = ({ href = '', title = '', count = '' }) => {
    const route = useRouter();

    return (
        <Link href={href} className="font-head sm-text">
            <a className="font-head sm-text flex flex-col items-center">
                <span className="text-sec no-select mb-2">{count}.</span>
                <span className={`hover:text-sec ${route.asPath === href ? 'text-sec' : 'text-head '}`}>{title}</span>
            </a>
        </Link>
    )
}

export const Nav = () => {
    const [menu, setMenu] = useState(false);

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
        <div>
            <nav className="md:px-14 px-6 flex items-center justify-between md:py-2 z-10">
                <div className="flex">
                    <Link href='/' className="focus:outline-none no-select">
                        <a className="text-lg rounded-md hover:bg-orange-200 hover:bg-opacity-10 font-head border-2 border-sec text-sec font-bold px-2">I</a>
                    </Link>
                </div>
                <div className="hidden md:block">
                    <ul className="flex space-x-5 items-center">
                        <li>
                            <Navlink title="About" count="01" href="/about" />
                        </li>
                        <li>
                            <Navlink title="Experience" count="02" href="/jobs" />
                        </li>
                        <li>
                            <Navlink title="Work" count="03" href="/projects" />
                        </li>
                        <li>
                            <Navlink title="Contact" count="04" href="/contact" />
                        </li>
                        <li>
                            <button className="border-sec border text-sec py-2 font-head text-sm px-4 rounded-md hover:bg-orange-200 hover:bg-opacity-10"><span>Resume</span></button>
                        </li>
                    </ul>
                </div>
                <button onClick={toggleMenu} className="text-4xl text-sec block md:hidden">
                    <BiMenuAltRight />
                </button>
            </nav>
            {
                menu ?
                    <div className="h-screen fixed w-full justify-end bg-gray-500 z-50 top-0 bg-opacity-80 flex">
                        <nav className="bg-prim w-2/3 flex flex-col relative">
                            <button onClick={() => setMenu(false)} className="text-4xl absolute right-5 top-5  mt-1 text-sec">
                                <IoCloseOutline />
                            </button>
                            <ul className="flex flex-col flex-1 space-y-12 items-center justify-center">
                                <li>
                                    <MobNavlink title="About" count="01" href="/about" />
                                </li>
                                <li>
                                    <MobNavlink title="Experience" count="02" href="/jobs" />
                                </li>
                                <li>
                                    <MobNavlink title="Work" count="03" href="/projects" />
                                </li>
                                <li>
                                    <MobNavlink title="Contact" count="04" href="/contact" />
                                </li>
                                <li>
                                    <button className="border-sec border text-sec py-2 font-head text-sm px-4 rounded-md hover:bg-orange-200 hover:bg-opacity-10"><span>Resume</span></button>
                                </li>
                            </ul>
                        </nav>
                    </div> : null
            }
        </div>
    );
}