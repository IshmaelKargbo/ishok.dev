import styled from "styled-components";
import { Button, Container } from "./styled-componet";

const AboutImage = styled.div`
    background: url(${prop => prop.image});
    height: 500px;
    @media (max-width: 768px) {
        height: 450px
    }
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const IFrame = styled.iframe`
    height: 400px;
    width: 100%;
    @media (max-width: 768px) {
        height: 315px
    }
`;

const AboutContent = styled.div`
    background: #1b3353;
`;

const Court = ({ index, title }) => {
    return (
        <div className="flex mb-1 cursor-pointer">
            <p className="bg-white text-prim p-3 w-14 text-center font-heading text-base font-bold">{index}</p>
            <p className="p-2 pl-5 flex-1 font-heading text-base bg-prim-court flex items-center">{title}</p>
        </div>
    );
}

const Testimonial = () => {
    return (
        <div className="bg-white shadow p-5 mb-3 border border-gray-50">
            <p className="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quae quia eius cum quo maxime doloremque, vel excepturi cupiditate</p>
            <p className="text-xs text-gray-500">- Ishmael Kargbo</p>
        </div>
    );
}

const Account = () => {
    return (
        <div className="bg-white border border-gray-100">
            <p className="text-xl bg-sec text-center font-heading font-bold text-white py-3">Junior</p>
            <div className="p-5 py-12 flex flex-col items-center">
                <h2 className="text-4xl md:text-3xl font-heading font-bold mb-10 text-center">Le 500,000</h2>
                <p className="mb-10 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Button type='sec' className='text-white text-sm'>
                    Comming soon
                </Button>
            </div>
        </div>
    );
}

export const HomeAbout = () => {
    return (
        <section id="about">
            <Container className="py-10">
                <div className="relative">
                    <AboutImage image="../about.png" className='w-full md:w-2/3'></AboutImage>
                    <AboutContent className="md:p-10 p-5 absolute md:right-0 w-full md:w-3/5 lg:w-1/2 md:mt-16 m-5 top-0 text-white md:py-20 py-10">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center md:mb-10 mb-5 lg:mb-5">Welcome</h2>
                        <p className="text-xs text-prim text-center md:mb-10 mb-5 lg:mb-5">TO OUR SPORT ZONE</p>
                        <p className="text-gray-300 text-center md:leading-normal mb-5">Sports zone, a multi-sports playing space along the beach with a beautiful sunset experience while having fun. 2T2 Sports Zone is a state-of-the-art center of sports excellence that offers a unique environment to promote sports tourism.</p>
                        <p className="text-gray-300 text-center md:leading-normal">This facility has three playing areas: a 10m X 10m hard court for 3 on 3 basketball and yoga, cushioned acrylic multi-field, and a clubhouse for Members  of the zone for locker room facility, working space, and playing table and board games.</p>
                    </AboutContent>
                </div>
            </Container>
        </section>
    );
}

export const HomeCourts = () => {
    const sports = ['Tennis', 'Basketball', 'Volleyball', 'Futsal', 'Badminton', 'Yoga']

    return (
        <section id="courts" className="bg-gray-100">
            <Container className="py-0">
                <div className="flex flex-wrap">
                    <div className="md:w-2/6 w-full bg-prim md:p-10 p-5 text-white">
                        <div className="mb-10">
                            <h2 className="font-heading font-bold text-2xl uppercase mb-3">Sport Courts</h2>
                            <hr className="w-10 mb-6" />
                            <p className="text-xs uppercase leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                        </div>
                        <div>
                            {
                                sports.map((sport, index) => (<Court index={index + 1} title={sport} key={index} />))
                            }
                        </div>
                    </div>
                    <div className="w-full md:w-4/6 md:p-10 py-10 flex flex-col">
                        <div className="mb-5">
                            <h2 className="font-heading font-bold text-2xl uppercase mb-3">Tennis Courts</h2>
                            <hr className="w-10 border-prim" />
                        </div>
                        <p className="uppercase text-sm text-prim mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi explicabo quas quam beatae.</p>
                        <img src="../about.png" alt="courts" className="md:h-96 h-72 object-cover" />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export const HomeTestimonials = () => {
    return (
        <section id="testimoials" className="bg-white">
            <Container className="py-10 pb-5">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-2/3 md:pr-10">
                        <IFrame
                            src="https://www.youtube.com/embed/9a2Eg9n3j4M"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                        </IFrame>
                    </div>
                    <div className="w-full md:w-1/3 md:mt-0 mt-10">
                        <Testimonial />
                        <Testimonial />
                        <Testimonial />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export const HomeRegister = () => {
    return (
        <section id="register" className="bg-gray-50">
            <Container className="py-10">
                <div className="mb-16 md:mb-24">
                    <h1 className="text-3xl md:text-5xl font-heading text-sec font-bold text-center mb-3">Club Membership</h1>
                    <p className="text-sm font-heading text-prim font-bold text-center">SELECT THE BEST PLAN</p>
                </div>
                <div className="md:-mx-2 flex flex-wrap">
                    <div className="w-full md:w-1/4 md:px-2 pb-5">
                        <Account />
                    </div>
                    <div className="w-full md:w-1/4 md:px-2 pb-5">
                        <Account />
                    </div>
                    <div className="w-full md:w-1/4 md:px-2 pb-5">
                        <Account />
                    </div>
                    <div className="w-full md:w-1/4 md:px-2 pb-5">
                        <Account />
                    </div>
                </div>
            </Container>
        </section>
    );
}