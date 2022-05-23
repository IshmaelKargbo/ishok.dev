import React from "react"
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsFolder } from "react-icons/bs";
import { Layout, Title } from "../components/Layout";
import { NextPage } from "next";
import Link from "next/link";

const Project = ({ index }) => {
    const direction = index % 2 === 1 ? 'Right' : 'Left';

    return (
        <div className={`flex items-center ${direction === 'Right' ? 'flex-row-reverse' : ''} mb-32`}>
            <div className="w-1/2 z-20">
                <div className={`${direction === 'Right' ? '-ml-10' : '-mr-10'}`}>
                    <h6 className={`text-sec font-head xs-text mb-2 ${direction === 'Right' ? 'text-right' : ''}`}>Production Project</h6>
                    <h1 className={`text-3xl text-head mb-4 font-semibold ${direction === 'Right' ? 'text-right' : ''}`}>Halcyon Theme</h1>
                    <p className={`bg-prim shadow-p p-5 rounded-md mb-5 ${direction === 'Right' ? 'text-right' : ''}`}>Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.
                        Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.</p>
                    <ul className={`flex space-x-5 mb-5 ${direction === 'Right' ? 'justify-end' : 'justify-start'}`}>
                        <li className="sm-text font-head">React</li>
                        <li className="sm-text font-head">Express</li>
                        <li className="sm-text font-head">Spotify API</li>
                        <li className="sm-text font-head">Styled Components</li>
                    </ul>
                    <div className={`flex space-x-5 text-xl ${direction === 'Right' ? 'justify-end' : 'justify-start'}`}>
                        <a href="/" className="text-head hover:text-sec"><FiGithub /></a>
                        <a href="/" className="text-head hover:text-sec"><HiOutlineExternalLink /></a>
                    </div>
                </div>
            </div>
            <div className="w-1/2 z-10">
                <img className="shadow-p cursor-pointer rounded-md" src="https://mobirise.com/assets52/images/poster.webp" />
            </div>
        </div>
    )
}

const Noteworthy = () => {
    return (
        <div className="bg-prim shadow-p p-5 rounded-md cursor-pointer">
            <div className="flex justify-between items-center mb-7">
                <BsFolder className="text-4xl text-sec" />
                <div className="flex space-x-5 text-xl">
                    <a href="/" className="text-head hover:text-sec"><FiGithub /></a>
                    <a href="/" className="text-head hover:text-sec"><HiOutlineExternalLink /></a>
                </div>
            </div>
            <h1 className="text-head text-2xl font-semibold mb-3">Integrating algolia search with wordpress multisite</h1>
            <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit perspiciatis eius veniam amet tempora enim</p>
            <ul className='flex -mx-2 flex-wrap -mb-5'>
                <li className="sm-text mx-2 font-head mb-2">React</li>
                <li className="sm-text mx-2 font-head mb-2">Express</li>
                <li className="sm-text mx-2 font-head mb-2">Spotify API</li>
                <li className="sm-text mx-2 font-head mb-2">Styled Components</li>
            </ul>
        </div>
    )
}

const Projects: NextPage = () => {
    return (
        <Layout>
            <div className="my-20">
                <Title title='Some Things I’ve Built' count='02' />
                <div className="mt-16 mb-48">
                    {
                        [1, 2, 3].map((project, key) => (
                            <Project index={key} key={key} />
                        ))
                    }
                </div>
                <h1 className="text-head text-center text-3xl font-semibold mb-2">Other Noteworthy Projects</h1>
                <div className="flex justify-center">
                    <Link href='/archive'>
                        <a className="text-sec sm-text font-head hover:underline">view the archive</a>
                    </Link>
                </div>
                <ul className="flex my-20 -mx-5 flex-wrap">
                    {
                        [1, 2, 3, 4, 5, 6].map((project, key) => (
                            <li key={key} className="w-1/3 p-2">
                                <Noteworthy />
                            </li>
                        ))
                    }
                </ul>
                <div className="flex justify-center">
                    <button className="border-sec border text-sec py-3 px-7 rounded-md hover:bg-orange-200 hover:bg-opacity-10"><span>Show More</span></button>
                </div>
            </div>
        </Layout>
    );
}

export default Projects;