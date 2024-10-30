const Services = () => {
    return (
        <div id="Services" className="p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-pink-500">Services</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols2 lg:grid-cols1 justify-around gap-20">
                <h2 data-aos="fade-up" className="text-[26px] flex items-center justify-center text-pink-700 rounded-3xl h-36 w-44 border-2 border-pink-700">HTML5</h2>
                <h2 data-aos="fade-down" className="text-[26px] flex items-center justify-center text-pink-700 rounded-3xl h-36 w-44 border-2 border-pink-700">JavaScript</h2>
                <h2 data-aos="fade-up" className="text-[26px] flex items-center justify-center text-pink-700 rounded-3xl h-36 w-44 border-2 border-pink-700">Python</h2>
                <h2 data-aos="fade-down" className="text-[26px] flex items-center justify-center text-pink-700 rounded-3xl h-36 w-44 border-2 border-pink-700">React</h2>
                <h2 data-aos="fade-up" className="text-[26px] flex items-center justify-center text-pink-700 rounded-3xl h-36 w-44 border-2 border-pink-700">CSS3</h2>
            </div>
        </div>
    );
};

export default Services;