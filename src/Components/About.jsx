import img from '../assets/omakuva2.jpg';
import pdf from '../assets/CV.pdf';
import DownloadButton from '../Components/DownloadButton';

const About = () => {
    return (
        <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <img data-aos="fade down" src={img} width={290} height={290} className="rounded border-2 p-1 border-pink-500" alt=""/>
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal">ABOUT<span className="text-pink-500"> ME</span></h1>
                <p data-aos="fade-left">
                    I have just started learning about programming, so far I have studied a few programming languages. My hobbies include video games, knitting, crocheting, and painting. I hope to get a career as a video game programmer in the future.
                </p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <DownloadButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;