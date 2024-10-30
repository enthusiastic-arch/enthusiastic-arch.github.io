import {AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import img from '../assets/omakuva.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
const Banner = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        })   
    },[1000])
    return (
        <div data-aos="fade-up" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal">Welcome to <span className="text-pink-500">Anna's portfolio</span> </h1>
                <p data-aos="fade-left">This is my portfolio. I am a student learning programming and I made this website to show off my work, and tell about myself. If you have any questions you can contact me via email; anna.verikov@gmail.com</p>
                <div className="flex mt-8 gap-2" >
                    <div className="flex items-center justify-center" >
                        <div className="flex space-x-2">
                            <a className="text-white hover:text-pink-600 transition-all duration-150 ease-in-out" href="https://www.linkedin.com/in/anna-verikov/">
                                <FaLinkedinIn className="text-[30px]"/>
                            </a>
                            <a className="text-white hover:text-pink-600 transition-all duration-150 ease-in-out" href="https://github.com/enthusiastic-arch">
                                <AiFillGithub className="text-[30px]"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-up" src={img} width={290} height={290} className="rounded-full border-2 p-1 border-pink-500" alt=""/>
        </div>
    );
};

export default Banner;