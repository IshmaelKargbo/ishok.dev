import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Button } from "./styled-componet";

const Slide = styled.div`
    height: 500px;
    @media (max-width: 768px) {
        height: 400px
    }
    background: url('${props => props.image}');
    background-position: center;
    background-size: cover;
    display: flex;
`;

const SlideBody = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
`;


export const HomeSlider = () => {

    const settings = {
        dots: true,
        fade: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <section id="home">
            <Slider {...settings}>
                <Slide image="../slide.png">
                    <SlideBody>
                        <div className="container mx-auto md:px-36 px-6 h-full flex items-center">
                            <div className="w-full md:w-3/5 lg:w-1/2 text-white md:pl-10">
                                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-5">sport for<br />healthy lifetime</h1>
                                <p className="text-xs mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus delectus rerum quo officia, tempore, similique</p>
                                <Button>Learn more</Button>
                            </div>
                        </div>
                    </SlideBody>
                </Slide>
                <Slide image="../slide1.png">
                    <SlideBody>
                        <div className="container mx-auto md:px-36 px-6 h-full flex items-center flex-row-reverse justify-center">
                            <div className="w-full md:w-1/2 xl:w-1/2 text-white pl-10 flex flex-col items-center">
                                <h1 className="text-4xl md:text-5xl font-bold font-heading leading-normal mb-5 text-center">play with your<br /> friend</h1>
                                <p className="text-xs mb-5 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus delectus rerum quo officia, tempore, similique</p>
                                <Button>Learn more</Button>
                            </div>
                        </div>
                    </SlideBody>
                </Slide>
                <Slide image="../slide2.png">
                    <SlideBody>
                        <div className="container mx-auto md:px-36 px-6 h-full flex items-center flex-row-reverse justify-center">
                            <div className="w-full md:w-1/2 xl:w-1/2 text-white pl-10 flex flex-col items-center">
                                <h1 className="text-4xl md:text-5xl font-bold font-heading leading-normal mb-5 text-center">play with your<br /> friend</h1>
                                <p className="text-xs mb-5 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus delectus rerum quo officia, tempore, similique</p>
                                <Button>Learn more</Button>
                            </div>
                        </div>
                    </SlideBody>
                </Slide>
            </Slider>
        </section>
    );
}