import img1 from '../assets/upcoming.jpg';
import img2 from '../assets/projectsimg.jpg';
import img3 from '../assets/appear.jpg';
import img4 from '../assets/here.jpg';


const Projects = () => {
    return (
        <div id="Projects" className="p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-pink-500">Projects</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols2 lg:grid-cols1 justify-around gap-10">
            <img data-aos="fade-up" height={350} width={250} className="text-[26px] flex items-center justify-center rounded-3xl h-36 w-44 p-1 border-2 border-pink-700" src={img1} alt="" />
            <img data-aos="fade-down" height={350} width={250} className="text-[26px] flex items-center justify-center rounded-3xl h-36 w-44 p-1 border-2 border-pink-700" src={img2} alt="" />
            <img data-aos="fade-up" height={350} width={250} className="text-[26px] flex items-center justify-center rounded-3xl h-36 w-44 p-1 border-2 border-pink-700" src={img3} alt="" />
            <img data-aos="fade-down" height={350} width={250} className="text-[26px] flex items-center justify-center rounded-3xl h-36 w-44 p-1 border-2 border-pink-700" src={img4} alt="" />
        </div>
        </div>
    );
};

export default Projects;