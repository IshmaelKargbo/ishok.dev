import { NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react"
import { Layout } from "../components/Layout";

const Contact: NextPage = () => {
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
                <div className="flex flex-col items-center -mt-16 md:mt-0">
                    <h5 className="text-sec mb-10"><span className="mr-3">04.</span><span>What’s Next?</span></h5>
                    <h1 className="text-head md:sub-text text-2xl md:mb-2 mb-10">Get In Touch</h1>
                    <p className="md:w-2/5 w-full text-center mb-16">Although I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                    <div>
                        <a href="mailto:ishmaelkargbo5@outlook.com?subject=Say Hello">
                            <button className="border-sec border text-sec text-sm md:text-lg md:py-3 md:px-10 px-6 py-3 rounded-md hover:bg-orange-200 hover:bg-opacity-10"><span>Say Hello</span></button>
                        </a>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Contact;