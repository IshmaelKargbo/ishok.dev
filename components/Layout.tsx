import React from "react";
import { Connect, Email } from "./BottomNav";
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen overflow-y-auto">
            <header className="py-6">
                <Nav />
            </header>
            <main className="flex-1 flex items-center md:px-14">
                <Connect />
                <div className="flex-1 mx-auto container md:px-28 px-6">
                    {children}
                </div>
                <Email />
            </main>
        </div>
    );
}

export const Title = ({title, count}) => {
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