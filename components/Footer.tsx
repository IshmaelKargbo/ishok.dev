import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi"

export const Footer = () => {
    return (
        <footer className="px-5">
            <ul className="flex space-x-8 mb-10 justify-center md:hidden">
                <li className="align-middle hover:text-sec"><a href='https://github.com/ishmaelkargbo' target='_blank'><FiGithub className="text-lg" /></a></li>
                <li className="align-middle hover:text-sec"><a href='https://twitter.com/ishodev' target='_blank'><FiInstagram className="text-lg" /></a></li>
                <li className="align-middle hover:text-sec"><a href='https://twitter.com/ishodev' target='_blank'><FiTwitter className="text-lg" /></a></li>
                <li className="hover:text-sec"><a href='https://www.linkedin.com/in/ishmael-kargbo-503660169' target='_blank'><FiLinkedin className="text-lg" /></a></li>
            </ul>
            <p className="xs-text text-center mb-10 font-head">
                <span>Design by </span> <a href="https://github.com/bchiang7" className="text-sec">Brittany Chiang</a> <span>& Build by </span> <a href="https://github.com/IshmaelKargbo" className="text-sec">Ishmael Kargbo</a>
            </p>
        </footer>
    )
}