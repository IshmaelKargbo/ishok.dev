import React from "react";
import { Connect, Email } from "./BottomNav";
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen overflow-y-auto">
            <header className="py-6">
                <Nav />
            </header>
            <main className="flex-1 flex items-center px-14">
                <Connect />
                <div className="flex-1 mx-auto container px-28">
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
                <p className="text-xl font-head text-sec no-select">{count}.</p>
                <p className="text-3xl font-semibold text-head whitespace-nowrap">{title}</p>
            </div>
            <div className="border-t h-1 border-gray-700 w-72"></div>
        </div>
    )
}