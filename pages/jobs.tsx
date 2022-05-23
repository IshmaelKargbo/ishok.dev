import { NextPage } from "next";
import React, { useState } from "react"
import { FiPlay } from "react-icons/fi";
import { Layout, Title } from "../components/Layout";

const Tab = ({ name, id, active = '', onClick = (e) => { } }) => {
    return (
        <p onClick={onClick} id={id} className={`sm-text font-head py-3  whitespace-nowrap hover:bg-orange-200 cursor-pointer hover:bg-opacity-10 hover:border-sec px-5 border-l-2 lb-m ${id === active ? 'bg-orange-200 bg-opacity-10 border-sec' : 'border-alt'}`}>{name}</p>
    )
}

const Duty = ({ duty }) => {
    return (
        <div className="flex space-x-5 mb-5">
            <FiPlay className="text-sec text-base jt-p" />
            <p>{duty}</p>
        </div>
    )
}

const Jobs: NextPage = () => {

    const jobs:any = [
        {
            id: "1",
            name: "Arsabi SL",
            link: 'https://www.google.com/',
            position: "Full Stack Developer",
            start: "Apirl 2018",
            end: "December 2019",
            duties: [
                "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
                "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
                "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more"
            ]
        },
        {
            id: "2",
            name: "Fix Solution",
            link: 'https://www.google.com/',
            position: "Full Stack Developer",
            start: "January 2020",
            end: "Present",
            duties: [
                "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
                "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
                "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more"
            ]
        },
        {
            id: "3",
            name: "Kolie",
            link: 'https://www.google.com/',
            position: "Full Stack Developer",
            start: "January 2020",
            end: "Present",
            duties: [
                "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
                "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
                "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more"
            ]
        }
    ]

    const [active, setActive] = useState(jobs.length > 0 ? jobs[0] : null)

    const changeTab = ({ target }) => {
        const id = target.id;

        const job = jobs.find((job) => (job.id === id));

        if (job) setActive(job);
    }

    return (
        <Layout>
            <div className="flex justify-center">
                <div className="w-3/4">
                    <Title title='Where I’ve Worked' count='02' />
                    <div className="flex">
                        <div>
                            <ul className="border-l-2 border-alt">
                                {
                                    jobs.map((job) => (<li key={job.id}><Tab onClick={changeTab} name={job.name} id={job.id} active={active ? active.id : ''} /></li>))
                                }
                            </ul>
                        </div>
                        <div className="pl-10">
                            <h5 className="text-xl text-head mb-1">
                                <span>{active.position}</span>
                                <span className="text-sec mx-2">@</span>
                                <a href={active.link} className="hover:text-sec hover:underline" target='_blank'>{active.name}</a>
                            </h5>
                            <p className="sm-text font-head mb-10">{active.start} - {active.end}</p>
                            <ul>
                                <li>
                                    {
                                        active.duties.map((duty, index) => (<Duty key={index} duty={duty} />))
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Jobs;