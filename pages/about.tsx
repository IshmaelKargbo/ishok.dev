import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react"
import { FiPlay } from "react-icons/fi";
import { Layout, Title } from "../components/Layout";

const Tech = ({ name }) => {
    return (
        <Link href='#'>
            <div className="flex space-x-2 items-center">
                <FiPlay className="xs-text text-sec" />
                <p className="sm-text font-head">{name}</p>
            </div>
        </Link>
    )
}

const About: NextPage = () => {
    const techs = ["JavaScript (ES6+)", "TypeScript", "React", "Vue", "Node.js", "Ruby", "Rails", "Python"];

    return (
        <>
            <NextSeo
                title="Ishmael Kargbo"
                description="I'm a Full-stack developer from Sierra Leone"
                canonical="https://www.ishok.dev/"
                twitter={{
                    handle: '@ishodev',
                    site: '@Ishok',
                    cardType: 'me.jpeg',
                }}
            />
            <Layout>
                <div className="flex flex-wrap">
                    <div className="md:w-3/5 w-full">
                        <Title title='About Me' count='01' />
                        <p className="mb-5">Hello! My name is Ishmael and I enjoy creating things that live on the internet. My interest in development started back in 2016 when I was curious about games and decided to enroll for a software development course.</p>
                        <p className="mb-5">Fast-forward to today, and I’ve had the privilege of working at a tech start-up, a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                        <p className="mb-5">Here are a few technologies I’ve been working with recently:</p>
                        <div className="flex flex-wrap">
                            {
                                techs.map((tech, key) => (
                                    <div key={key} className="w-1/2 mb-2">
                                        <Tech name={tech} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="md:w-2/5 w-full p-10 pt-20 md:pl-20 pl-10">
                        <div className="relative">
                            <div className="w-full h-full -z-10 absolute border-2 border-alt rounded-md top-4 left-4">
                            </div>
                            <div className="w-full">
                                <img src='me.jpeg' alt="me" className="rounded-md block border border-gray-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout></>
    );
}

export default About;