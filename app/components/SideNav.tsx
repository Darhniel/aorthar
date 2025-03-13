'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function SideNav() {
    const pathname = usePathname();

    return (
        <div className='px-2 w-[13.25rem] overflow-y-scroll styled-scrollbar border-r border-[#0000001a]'>
            <div className="flex gap-2 items-center p-5">
                <Image
                    src={"/images/user.svg"}
                    width={24}
                    height={24}
                    alt="User"
                />
                <span>Adedamola</span>
            </div>

            <div className='mt-8 h-3/4'>
                <span className={'text-sm ml-6 text-[#00000066] mb-3'}>
                    Menu
                </span>

                <ul className={'w-40 mx-auto custom-list-disc'}>
                    <li className={'w-24 mx-auto h-7'}>
                        <Link href="/dashboard" className={`${pathname === "/dashboard" ? "text-[#08694A] font-semibold" : ""}`}>Courses</Link>
                    </li>
                    <li className={'w-24 mx-auto h-7'}>
                        <Link href="/dashboard/help" className={`${pathname === "/dashboard/help" ? "text-[#08694A] font-semibold" : ""}`}>Help</Link>
                    </li>
                    <li className={'w-24 mx-auto h-7'}>
                        <Link href="/dashboard/settings" className={`${pathname === "/dashboard/settings" ? "text-[#08694A] font-semibold" : ""}`}>Settings</Link>
                    </li>
                    <li className={'w-full h-7 mt-40 flex gap-3 items-center'}>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#D72B27"
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="lucide lucide-power"
                        >
                            <path d="M12 2v10" />
                            <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
                        </svg>

                        <span>Logout</span>
                    </li>
                </ul>
            </div>

            <div className='mt-auto'>
                <Image
                    src={'/images/logo.svg'}
                    width={76.5}
                    height={27}
                    alt='logo'
                    className='mx-auto my-4'
                />
            </div>
        </div>
    )
}