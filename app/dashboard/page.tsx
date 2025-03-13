import Link from "next/link";
import React from 'react';
import Image from 'next/image'

export default function Page() {
    return (
        // <section>
        //     <div className="flex justify-between items-center px-4">
        //         <span>Courses</span>
        //         <Link href={'#'}>
        //             +{' '}
        //             <span>Add New Course</span>
        //         </Link>
        //     </div>

        //     <div>

        //     </div>
        // </section>

        <div className="bg-white min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header Section */}
                <header className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold">Courses</h1>
                    <a href="#" className="text-green-500 font-semibold hover:underline">
                        + Add New Course
                    </a>
                </header>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                    {/* Card 1 */}
                    <div className="flex flex-col min-h-[280px]">
                        {/* "Watch Class" badge */}
                        <div className="">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#FF386B"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-arrow-up-right"
                                    >
                                        <path d="M7 7h10v10" />
                                        <path d="M7 17 17 7" />
                                    </svg>
                                    <span className="text-[#FF386B] text-xs uppercase">Watch Class</span>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="#EB8F00"
                                    stroke="#EB8F00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-star"
                                >
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-2xl w-3/4">Product Management Bootcamp</h2>
                            </div>
                        </div>

                        <div className="mt-3">
                            <Image
                                src={"/images/image.png"}
                                alt=""
                                width={388}
                                height={309}
                            />
                        </div>
                        {/* <div className="mt-auto">
                            <h2 className="text-xl font-semibold mb-1">
                                Product Career Bootcamp
                            </h2>
                            <p className="text-sm mb-1">Online Course (Pre-recorded)</p>
                            <p className="text-sm mb-4">
                                Beginners Guide to Starting a Career in Tech
                            </p>
                            <p className="text-sm font-medium">Adeola Adaramola</p>
                        </div> */}
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col min-h-[280px]">
                        <div className="">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#FF386B"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-arrow-up-right"
                                    >
                                        <path d="M7 7h10v10" />
                                        <path d="M7 17 17 7" />
                                    </svg>
                                    <span className="text-[#FF386B] text-xs uppercase">Watch Class</span>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="#B1B1B1"
                                    stroke="#B1B1B1"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-star"
                                >
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-2xl w-3/4">Product Management Bootcamp</h2>
                            </div>
                        </div>

                        <div className="mt-3">
                            <Image
                                src={"/images/image(1).png"}
                                alt=""
                                width={388}
                                height={309}
                            />
                        </div>
                        {/* <div className="mt-auto">
                            <h2 className="text-xl font-semibold mb-1">
                                Product Career Bootcamp
                            </h2>
                            <p className="text-sm mb-1">Online Course (Pre-recorded)</p>
                            <p className="text-sm mb-4">
                                Beginners Guide to Starting a Career in Tech
                            </p>
                            <p className="text-sm font-medium">Adeola Adaramola</p>
                        </div> */}
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col min-h-[280px]">
                        {/* "Watch Class" badge */}
                        <div className="">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#FF386B"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-arrow-up-right"
                                    >
                                        <path d="M7 7h10v10" />
                                        <path d="M7 17 17 7" />
                                    </svg>
                                    <span className="text-[#FF386B] text-xs uppercase">Watch Class</span>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="#B1B1B1"
                                    stroke="#B1B1B1"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-star"
                                >
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-2xl w-3/4">Product Management Bootcamp</h2>
                            </div>
                        </div>

                        <div className="mt-3">
                            <Image
                                src={"/images/image(1).png"}
                                alt=""
                                width={388}
                                height={309}
                            />
                        </div>
                        {/* <div className="mt-auto">
                            <h2 className="text-xl font-semibold mb-1">
                                Product Career Bootcamp
                            </h2>
                            <p className="text-sm mb-1">Online Course (Pre-recorded)</p>
                            <p className="text-sm mb-4">
                                Beginners Guide to Starting a Career in Tech
                            </p>
                            <p className="text-sm font-medium">Adeola Adaramola</p>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}