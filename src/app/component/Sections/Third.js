"use client"
import React from 'react'
import { BsInstagram } from "react-icons/bs";
import '../../styles/globals.css'

const Third = () => {
    return (
        <>
            <div className='flex flex-col py-6 px-7'>
                <span className='text-4xl font-bold'>Follow our instagram</span>
                <span className='text-gray-400 text-lg'>Our official Instagram account @ultras or #ultras_clothing</span>
                <div className='flex justify-between'>
                    <div className='w-[205px] imgsThird h-[205px] overflow-hidden relative'>
                        <img src='https://themewagon.github.io/ultras/images/insta-image1.jpg' className='' alt=''/>
                        <BsInstagram className='ig text-white absolute top-[41%] z-10 left-[45%] hidden text-4xl'/>
                    </div>
                    <div className='w-[205px] imgsThird h-[205px] overflow-hidden relative'>
                        <img src='https://themewagon.github.io/ultras/images/insta-image2.jpg' className='' alt=''/>
                        <BsInstagram className='ig text-white absolute top-[41%] hidden z-10 left-[41%] text-4xl'/>
                    </div>
                    <div className='w-[205px] imgsThird h-[205px] overflow-hidden relative'>
                        <img src='https://themewagon.github.io/ultras/images/insta-image3.jpg' className='' alt=''/>
                        <BsInstagram className='ig text-white absolute top-[41%] hidden z-10 left-[41%] text-4xl'/>
                    </div>
                    <div className='w-[205px] imgsThird h-[205px] overflow-hidden relative'>
                        <img src='https://themewagon.github.io/ultras/images/insta-image4.jpg' className='' alt=''/>
                        <BsInstagram className='ig text-white absolute top-[41%] hidden z-10 left-[41%] text-4xl'/>
                    </div>
                    <div className='w-[205px] imgsThird h-[205px] overflow-hidden relative'>
                        <img src='https://themewagon.github.io/ultras/images/insta-image5.jpg' className='' alt=''/>
                        <BsInstagram className='ig text-white absolute top-[41%] hidden z-10 left-[41%] text-4xl'/>
                    </div>
                    <div className='w-[205px] imgsThird h-[205px] overflow-hidden relative'>
                        <img src='https://themewagon.github.io/ultras/images/insta-image6.jpg' className='' alt=''/>
                        <BsInstagram className='ig text-white absolute top-[41%] hidden z-10 left-[41%] text-4xl'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Third
