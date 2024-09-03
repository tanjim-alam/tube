"use client";
import React, { useState } from 'react';
import { MdNoEncryptionGmailerrorred, MdSupportAgent, MdOutlinePrivacyTip } from "react-icons/md";
import { FaSteamSymbol, FaFireAlt } from "react-icons/fa";
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { IoMdDoneAll } from "react-icons/io";
import ServiceCard from "./ServiceCard";
import youtubeViewsData from "../../constant/youtube/youtubeViewsData.json";


function PackageSection() {
    return (
        <div className='bg-white pb-16'>
            <div className='lg:w-[80%] w-[90%] flex flex-col gap-10 m-auto'>
                <div className='flex flex-col items-center gap-4'>
                    <h3 className='lg:text-3xl text-2xl text-center lg:text-start font-semibold'>Buy Youtube Views to Boost Engagements!</h3>
                    <p className='lg:text-xl text-lg text-center lg:text-start font-medium'>Get Real Youtube Views and Boost Your Video Impressions.</p>
                </div>
                <ServiceCard packageData={youtubeViewsData} />
            </div>
        </div>
    )
}

export default PackageSection