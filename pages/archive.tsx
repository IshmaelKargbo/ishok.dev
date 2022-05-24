import { NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Layout } from "../components/Layout";

const Archive: NextPage = () => {
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
            <div className="mb-10">
                <h1 className="text-head md:title-text text-4xl">Archive</h1>
                <h6 className="font-head md:mt-6 text-sm md:text-base text-sec">A big list of things I’ve worked on</h6>
            </div>
            <div>
                <table className="w-full archive hidden md:block">
                    <thead>
                        <tr>
                            <th className="font-semibold w-16">Year</th>
                            <th className="font-semibold w-72">Title</th>
                            <th className="font-semibold w-36">Made at</th>
                            <th className="font-semibold">Built with</th>
                            <th className="font-semibold">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="cursor-default">
                            <td className="year overline">2021</td>
                            <td className="title">Koala Health</td>
                            <td className="company"><span>Upstatement</span></td>
                            <td className="tech"><span>Next.js · TypeScript · Redux Toolkit · Stripe · Algolia · Firebase Auth · Formik · Yup ·  Vercel</span></td>
                            <td className="link">
                                <div className="space-x-3 flex">
                                    <a href="/" className="text-head hover:text-sec"><FiGithub /></a>
                                    <a href="/" className="text-head hover:text-sec"><HiOutlineExternalLink /></a>
                                </div>
                            </td>
                        </tr>
                        <tr className="cursor-default">
                            <td className="year overline">2021</td>
                            <td className="title">Koala Health</td>
                            <td className="company"><span>Upstatement</span></td>
                            <td className="tech"><span>Next.js · TypeScript · Redux Toolkit · Stripe · Algolia · Firebase Auth · Formik · Yup ·  Vercel</span></td>
                            <td className="link">
                                <div className="space-x-3 flex">
                                    <a href="/" className="text-head hover:text-sec"><FiGithub /></a>
                                    <a href="/" className="text-head hover:text-sec"><HiOutlineExternalLink /></a>
                                </div>
                            </td>
                        </tr>
                        <tr className="cursor-default">
                            <td className="year overline">2021</td>
                            <td className="title">Koala Health</td>
                            <td className="company"><span>Upstatement</span></td>
                            <td className="tech"><span>Next.js · TypeScript · Redux Toolkit · Stripe · Algolia · Firebase Auth · Formik · Yup ·  Vercel</span></td>
                            <td className="link">
                                <div className="space-x-3 flex">
                                    <a href="/" className="text-head hover:text-sec"><FiGithub /></a>
                                    <a href="/" className="text-head hover:text-sec"><HiOutlineExternalLink /></a>
                                </div>
                            </td>
                        </tr>
                        <tr className="cursor-default">
                            <td className="year overline">2021</td>
                            <td className="title">Koala Health</td>
                            <td className="company"><span>Upstatement</span></td>
                            <td className="tech"><span>Next.js · TypeScript · Redux Toolkit · Stripe · Algolia · Firebase Auth · Formik · Yup ·  Vercel</span></td>
                            <td className="link">
                                <div className="space-x-3 flex">
                                    <a href="/" className="text-head hover:text-sec"><FiGithub /></a>
                                    <a href="/" className="text-head hover:text-sec"><HiOutlineExternalLink /></a>
                                </div>
                            </td>
                        </tr>
                        <tr className="cursor-default">
                            <td className="year overline">2021</td>
                            <td className="title">Koala Health</td>
                            <td className="company"><span>Upstatement</span></td>
                            <td className="tech"><span>Next.js · TypeScript · Redux Toolkit · Stripe · Algolia · Firebase Auth · Formik · Yup ·  Vercel</span></td>
                            <td className="link">
                                <div className="space-x-3 flex">
                                    <a href="/" className="text-head hover:text-sec"><FiGithub /></a>
                                    <a href="/" className="text-head hover:text-sec"><HiOutlineExternalLink /></a>
                                </div>
                            </td>
                        </tr>
                        <tr className="cursor-default">
                            <td className="year overline">2021</td>
                            <td className="title">Integrating Algolia Search with WordPress Multisite</td>
                            <td className="company"><span>Upstatement</span></td>
                            <td className="tech"><span>Next.js · TypeScript · Redux Toolkit · Stripe · Algolia · Firebase Auth · Formik · Yup ·  Vercel</span></td>
                            <td className="link">
                                <div className="space-x-3 flex">
                                    <a href="/" className="text-head hover:text-sec"><FiGithub /></a>
                                    <a href="/" className="text-head hover:text-sec"><HiOutlineExternalLink /></a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="w-full archive block md:hidden">
                    <thead>
                        <tr>
                            <th className="font-semibold w-16">Year</th>
                            <th className="font-semibold w-72">Title</th>
                            <th className="font-semibold">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="cursor-default">
                            <td className="year overline">2021</td>
                            <td className="title">Koala Health</td>
                            <td className="link">
                                <div className="space-x-3 flex">
                                    <a href="/" className="text-head hover:text-sec"><FiGithub /></a>
                                    <a href="/" className="text-head hover:text-sec"><HiOutlineExternalLink /></a>
                                </div>
                            </td>
                        </tr>
                        <tr className="cursor-default">
                            <td className="year overline">2021</td>
                            <td className="title">Koala Health</td>
                            <td className="link">
                                <div className="space-x-3 flex">
                                    <a href="/" className="text-head hover:text-sec"><FiGithub /></a>
                                    <a href="/" className="text-head hover:text-sec"><HiOutlineExternalLink /></a>
                                </div>
                            </td>
                        </tr>
                        <tr className="cursor-default">
                            <td className="year overline">2021</td>
                            <td className="title">Koala Health</td>
                            <td className="link">
                                <div className="space-x-3 flex">
                                    <a href="/" className="text-head hover:text-sec"><FiGithub /></a>
                                    <a href="/" className="text-head hover:text-sec"><HiOutlineExternalLink /></a>
                                </div>
                            </td>
                        </tr>
                        <tr className="cursor-default">
                            <td className="year overline">2021</td>
                            <td className="title">Koala Health</td>
                            <td className="link">
                                <div className="space-x-3 flex">
                                    <a href="/" className="text-head hover:text-sec"><FiGithub /></a>
                                    <a href="/" className="text-head hover:text-sec"><HiOutlineExternalLink /></a>
                                </div>
                            </td>
                        </tr>
                        <tr className="cursor-default">
                            <td className="year overline">2021</td>
                            <td className="title">Koala Health</td>
                            <td className="link">
                                <div className="space-x-3 flex">
                                    <a href="/" className="text-head hover:text-sec"><FiGithub /></a>
                                    <a href="/" className="text-head hover:text-sec"><HiOutlineExternalLink /></a>
                                </div>
                            </td>
                        </tr>
                        <tr className="cursor-default">
                            <td className="year overline">2021</td>
                            <td className="title">Integrating Algolia Search with WordPress Multisite</td>
                            <td className="link">
                                <div className="space-x-3 flex">
                                    <a href="/" className="text-head hover:text-sec"><FiGithub /></a>
                                    <a href="/" className="text-head hover:text-sec"><HiOutlineExternalLink /></a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
        </>
    );
}

export default Archive;