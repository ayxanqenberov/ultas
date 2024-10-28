// src/components/Header.js
"use client"; // Bunu ekleyin
import { FaRegUser } from "react-icons/fa6";
import { VscSearch } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdMenu } from "react-icons/md";
const Header = () => (
    <>
        <div className="upHeader h-14 border-b flex w-full md:text-[18px] sm:text-[15px] items-center justify-evenly">
            <div>
                <span className="text-[#8D8D8D]">Let's talk! </span>
                <a className="text-[#8D8D8D] font-extrabold">+57 444 11 00 35</a>
            </div>
            <span className="lg:w-[60%] min-[320px]:hidden min-[600px]:block md:w-[60%] text-center text-[#8D8D8D] font-medium">Free shipping on a purchase value of $200</span>
            <ul className="upHeaderEndPart  flex items-center gap-2 text-[#8D8D8D]">
                <li><FaRegUser /></li>
                <li><SlBasket /></li>
                <li><CiHeart /></li>
                <li><VscSearch /></li>
            </ul>
        </div>
        <div className="h-[133px] flex items-center w-full justify-around min-[320px]:px-3 sm:px-0 ">
            <img src="https://themewagon.github.io/ultras/images/main-logo.png" />
            <nav className="w-[65%] flex justify-end">
                <ul className="flex items-center lg:w-[70%] text-lg justify-around min-[320px]:hidden min-[600px]:flex ">
                    <li className="pr-3 flex items-center hover:text-[#6997B3]"><a className=" duration-300" href="/">Home</a> <MdKeyboardArrowDown/></li>
                    <li className="pr-3 hover:text-[#6997B3]"><a className="duration-300" href="/about">About</a></li>
                    <li className="pr-3 hover:text-[#6997B3] flex items-center"><a className="duration-300" href="/shop">Shop</a> <MdKeyboardArrowDown/></li>
                    <li className="pr-3 hover:text-[#6997B3] flex items-center"><a className="duration-300" href="/pages">Pages</a> <MdKeyboardArrowDown/></li>
                    <li className="pr-3 hover:text-[#6997B3] flex items-center"><a className="duration-300" href="/blog">Blog</a><MdKeyboardArrowDown/></li>
                    <li className="pr-3 hover:text-[#6997B3]"><a className="duration-300" href="/contact">Contact</a></li>
                </ul>
                <MdMenu className="min-[600px]:hidden text-2xl"/>
            </nav>
        </div>
    </>
);

export default Header;
