import { NextPage } from "next";
import React from "react"
import { Layout } from "../components/Layout";

const Contact: NextPage = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <h5 className="text-sec mb-10"><span className="mr-3">04.</span><span>What’s Next?</span></h5>
                <h1 className="text-head sub-text mb-2">Get In Touch</h1>
                <p className="w-2/5 text-center mb-16">Although I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                <div>
                    <button className="border-sec border text-sec py-3 px-10 rounded-md hover:bg-orange-200 hover:bg-opacity-10"><span>Say Hello</span></button>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;