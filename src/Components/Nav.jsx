import { useState } from "react";
import { Link } from "react-scroll";
import {FaTimes} from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";


const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const content = <>
        <div classname="lg:hidden block absolute top-16 w-full left-0 right-0 bg-pink-200 transition">
            <ul className ="text-center text-xl p-20">
                <Link to="Home">
                    <li  className="my-4 py-4 border-b border-pink-200 hover:bg-pink-200 hover:rounded">Home</li>
                </Link>
                <Link to="About">
                    <li className="my-4 py-4 border-b border-pink-200 hover:bg-pink-200 hover:rounded">About</li>
                </Link>
                <Link to="Service">
                    <li className="my-4 py-4 border-b border-pink-200 hover:bg-pink-200 hover:rounded">Services</li>
                </Link>
                <Link to="Projects">
                    <li className="my-4 py-4 border-b border-pink-200 hover:bg-pink-200 hover:rounded">Projects</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10 flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
                <ul className="flex items-center flex-1">
                    <span className="text-3xl font-bold">av</span>
            <div className="lg: flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px]">
                <Link to="Home">
                    <li className="hover:text-pink-400 transition border-b-2 border-pink-200 hover:border-pink-400 cursor-pointer">Home</li>
                </Link>
                <Link to="About">
                    <li className="hover:text-pink-400 transition border-b-2 border-pink-200 hover:border-pink-400 cursor-pointer">About</li>
                </Link>
                <Link to="Services">
                    <li className="hover:text-pink-400 transition border-b-2 border-pink-200 hover:border-pink-400 cursor-pointer">Services</li>
                </Link>
                <Link to="Projects">
                    <li className="hover:text-pink-400 transition border-b-2 border-pink-200 hover:border-pink-400 cursor-pointer">Projects</li>
                </Link>
                </ul>
                    </div>
                </div>
                </ul>
                </div>
                <div>
                    {click && content}
                </div>

                <button className="block sm:hidden transtion"> onClick={handleClick}
                    {click ? <FaTimes/> : <CiMenuBurger />}
                </button>
            <div/>
        </nav>
    );
};
export default Nav;