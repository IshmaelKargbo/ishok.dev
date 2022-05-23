import { BsTwitter, BsInstagram } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"
import { Container } from "./styled-componet"

export const AppFooter = () => {
    return (
        <footer>
            <div className="bg-sec">
                <Container className="py-16 text-white">
                    <div className="flex md:-mx-5 flex-wrap md:justify-between">
                        <div className="w-full md:w-1/3 md:px-5 mb-10">
                            <img src="../logo.png" alt="soprt zone" className="w-16 mb-5" />
                            <p className="text-sm mb-5">Sports Zone App is a mobile/web app that connects a sports playing platform and users of the space. The app gives accurate information on current status and availability of the space in a bid to create a simple and easy way to both reserve the playing space and update membership status.</p>
                            <div className="mt-3 flex space-x-3">
                            <button className="border-gray-100 border text-white p-2 rounded-full"><BsTwitter /></button>
                            <button className="border-gray-100 border text-white p-2 rounded-full"><FaLinkedinIn /></button>
                            <button className="border-gray-100 border text-white p-2 rounded-full"><BsInstagram /></button>
                        </div>
                        </div>
                        <div className="w-full md:w-1/3 md:px-5">
                            <h2 className="font-heading font-bold mb-4">Contact us</h2>
                            <div className="mb-3">
                                <p className="font-heading font-bold text-sm mb-1">Address</p>
                                <p className="text-gray-300">Lumley-Aberdeen Beach Road</p>
                            </div>
                            <div className="mb-3">
                                <p className="font-heading font-bold text-sm mb-1">Call Us</p>
                                <p className="text-gray-300">+232 73 707212</p>
                            </div>
                            <div>
                                <p className="font-heading font-bold text-sm mb-1">Email</p>
                                <p className="text-gray-300">sales@yoursite.com</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="py-5 bg-white flex justify-center">
                <p className="text-sm">Copy right © 2022 All Rights Reserved</p>
            </div>
        </footer>
    );
}