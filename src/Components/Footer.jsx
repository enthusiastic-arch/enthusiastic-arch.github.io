import {FaGithub} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-pink-400 text-white lg:px-48 px-4 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="mb-4 md:mb-0">
                <span className="text-[22px] font-semibold text-pink-500 py-2">av</span>
                <p>Programmer student</p>
            </div>
            <div>
                <h2 className="text-[22px] text-pink-600">Services</h2>
                <ul className="text-[16px] my-4">
                    <li className="my-2">Web Design</li>
                    <li className="my-2">Web Development</li>
                    <li className="my-2">Artist</li>
                    <li className="my-2">Programming</li>
                </ul>
            </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] text-pink-600 py-2">Contact</h2>
                    <p className="text-[16px] my-4">Email: anna.verikov@gmail.com</p>
                </div>
                <div>
                <h2 className="text-[22px] text-pink-600 py-2">My socials</h2>
                    <div className="flex space-x-4">
                        <a className="text-white hover:text-pink-700 transition-all duration-150 ease-in-out" href="https://github.com/enthusiastic-arch">
                            <FaGithub/>
                        </a>
                        <a className="text-white hover:text-pink-700 transition-all duration-150 ease-in-out" href="https://www.linkedin.com/in/anna-verikov/">
                            <FaLinkedin />  
                        </a>
                </div>
            </div>
            </div>
        </footer>

    );
};

export default Footer;