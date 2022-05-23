import Link from "next/link";
import { useRouter } from "next/router";

const Navlink = ({ href = '', title = '', count = '' }) => {
    const route = useRouter();

    return (
        <Link href={href} className="font-head sm-text">
            <a className="font-head sm-text">
                <span className="text-sec mr-2 no-select">{count}.</span>
                <span className={`hover:text-sec ${route.asPath === href ? 'text-sec' : 'text-head '}`}>{title}</span>
            </a>
        </Link>
    )
}

export const Nav = () => {
    return (
        <>
            <nav className="px-14 flex items-center justify-between py-2">
                <div className="flex">
                    <Link href='/' className="focus:outline-none no-select">
                        <a className="text-lg rounded-md hover:bg-orange-200 hover:bg-opacity-10 font-head border-2 border-sec text-sec font-bold px-2">I</a>
                    </Link>
                </div>
                <div>
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
            </nav>
        </>
    );
}