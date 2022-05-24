import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

export const Connect = () => {

    return (
        <div className="fixed bottom-0 left-14 w-10 hidden md:block">
            <div className="flex flex-col items-center">
                <ul className="mb-10">
                    <li className="mb-10 align-middle hover:text-sec"><a href='https://github.com/ishmaelkargbo' target='_blank'><FiGithub className="text-xl" /></a></li>
                    <li className="mb-10 align-middle hover:text-sec"><a href='https://twitter.com/ishodev' target='_blank'><FiInstagram className="text-xl" /></a></li>
                    <li className="mb-10 align-middle hover:text-sec"><a href='https://twitter.com/ishodev' target='_blank'><FiTwitter className="text-xl" /></a></li>
                    <li className="hover:text-sec"><a href='https://www.linkedin.com/in/ishmael-kargbo-503660169' target='_blank'><FiLinkedin className="text-xl" /></a></li>
                </ul>
                <div className="border-l h-32 border-alt"></div>
            </div>
        </div>
    );
}

export const Email = () => {

    return (
        <div className="fixed bottom-0 right-14 w-10 hidden md:block">
            <div className="flex flex-col items-center">
                <a className="font-head xs-text text-v text-space mb-10 hover:text-sec" href="mailto:ishmaelkargbo5@outlook.com?subject=Get in touch with you">ishmaelkargbo5@outlook.com</a>
                <div className="border-l h-32 border-alt"></div>
            </div>
        </div>
    );
}