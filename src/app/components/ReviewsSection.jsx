"use client";
import React, { useEffect, useRef, useState } from 'react';
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import "../../app/globals.css";
import 'swiper/css';

function ReviewsSection() {
    const reviewsData = [
        {
            id: 1,
            name: "Markson",
            subject: "Thanks",
            message: "Tubeviews has promoted a number of my YouTube videos and always delivers the results I need..!!",
            date: "Fab 22, 2024"
        },
        {
            id: 1,
            name: "Markson",
            subject: "Thanks",
            message: "Tubeviews has promoted a number of my YouTube videos and always delivers the results I need..!!",
            date: "Fab 22, 2024"
        },
        {
            id: 1,
            name: "Markson",
            subject: "Thanks",
            message: "Tubeviews has promoted a number of my YouTube videos and always delivers the results I need..!!",
            date: "Fab 22, 2024"
        },
        {
            id: 1,
            name: "Markson",
            subject: "Thanks",
            message: "Tubeviews has promoted a number of my YouTube videos and always delivers the results I need..!!",
            date: "Fab 22, 2024"
        },
        {
            id: 1,
            name: "Markson",
            subject: "Thanks",
            message: "Tubeviews has promoted a number of my YouTube videos and always delivers the results I need..!!",
            date: "Fab 22, 2024"
        },
        {
            id: 1,
            name: "Markson",
            subject: "Thanks",
            message: "Tubeviews has promoted a number of my YouTube videos and always delivers the results I need..!!",
            date: "Fab 22, 2024"
        },
        {
            id: 1,
            name: "Markson",
            subject: "Thanks",
            message: "Tubeviews has promoted a number of my YouTube videos and always delivers the results I need..!!",
            date: "Fab 22, 2024"
        },
        {
            id: 1,
            name: "Markson",
            subject: "Thanks",
            message: "Tubeviews has promoted a number of my YouTube videos and always delivers the results I need..!!",
            date: "Fab 22, 2024"
        },
        {
            id: 1,
            name: "Markson",
            subject: "Thanks",
            message: "Tubeviews has promoted a number of my YouTube videos and always delivers the results I need..!!",
            date: "Fab 22, 2024"
        },
        {
            id: 1,
            name: "Markson",
            subject: "Thanks",
            message: "Tubeviews has promoted a number of my YouTube videos and always delivers the results I need..!!",
            date: "Fab 22, 2024"
        },
        {
            id: 1,
            name: "Markson",
            subject: "Thanks",
            message: "Tubeviews has promoted a number of my YouTube videos and always delivers the results I need..!!",
            date: "Fab 22, 2024"
        },
        {
            id: 1,
            name: "Markson",
            subject: "Thanks",
            message: "Tubeviews has promoted a number of my YouTube videos and always delivers the results I need..!!",
            date: "Fab 22, 2024"
        },
        {
            id: 1,
            name: "Markson",
            subject: "Thanks",
            message: "Tubeviews has promoted a number of my YouTube videos and always delivers the results I need..!!",
            date: "Fab 22, 2024"
        },
        {
            id: 1,
            name: "Markson",
            subject: "Thanks",
            message: "Tubeviews has promoted a number of my YouTube videos and always delivers the results I need..!!",
            date: "Fab 22, 2024"
        },
    ];

    const sliderRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        if (sliderRef.current) {
            const cardElement = sliderRef.current.querySelector('.card');
            if (cardElement) {
                setCardWidth(cardElement.clientWidth + 16); // Adjust if needed
            }
        }
    }, []);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (sliderRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

                if (scrollLeft + clientWidth >= scrollWidth) {
                    sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
                }
            }
        }, 1000); // Adjust the interval as needed

        return () => clearInterval(scrollInterval);
    }, [cardWidth]);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-white'>
            <div className='bg-[#f5f7fe] py-5 px-4 lg:px-0 flex flex-col gap-3 justify-center items-center'>
                <h2 className='lg:text-[2rem] text-xl text-center font-semibold'>🥇 Voices of Victory: Our Clients Speak Their Success!</h2>
                <p className='text-center'>
                    At Famoid, your satisfaction is our priority. Experience unparalleled customer service and watch your social media soar!
                </p>
            </div>
            <div className='lg:w-[80%] w-[90%] m-auto lg:py-10 py-5'>
                {/* <div className="relative w-full">
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                    >
                        &#10094;
                    </button>
                    <div
                        ref={sliderRef}
                        className="flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide"
                    >
                        {reviewsData.map((data, i) => (
                            <div key={i} className="card flex-shrink-0">
                                <ReviewCard data={data} />
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                    >
                        &#10095;
                    </button>
                </div> */}
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    modules={[FreeMode, Pagination, Navigation, Autoplay]}
                    breakpoints={{
                        700: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    className="flex flex-col"
                >

                    {reviewsData.map((data, i) => (
                        <SwiperSlide key={i} className=" min-w-[310px] max-w-[330px]  mb-5">
                            <ReviewCard data={data} />
                        </SwiperSlide>
                        // <div key={i} className="">
                        //     <ReviewCard data={data} />
                        // </div>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}


export default ReviewsSection