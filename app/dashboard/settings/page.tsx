import { GoogleIcon } from '@/app/components/SVG';
import React from 'react';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Top Bar */}
            <nav className="flex items-center justify-between p-4">
                <h3 className="text-black pb-2 text-sm border-b-2 border-black font-semibold">
                    Profile Settings
                </h3>
                <button className="text-green-500 font-semibold hover:underline">
                    Save Changes
                </button>
            </nav>

            {/* Main Content */}
            <main className="flex flex-col p-4">
                <div className="bg-white w-full max-w-md rounded-lg shadow-md p-6">
                    {/* User Info */}
                    <div className="flex flex-col mb-6">
                        <Image
                            src={""}
                            alt="Profile"
                            width={64}
                            height={64}
                            className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                            <h2 className="text-sm font-bold">Adewale Damola</h2>
                            <p className="text-xs text-[#08694A] flex items-center mt-1">
                                <GoogleIcon />
                                adewaledamola@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* Phone Number + Edit WhatsApp */}
                    <div className="mb-6 flex items-center bg-[#ebefe080] justify-between p-3">
                        <span className="text-gray-800 text-sm mr-3">
                            +234 814 8104 814
                        </span>
                        <button className="bg-[#08694A] text-white text-sm px-3 py-1 rounded-lg">
                            Edit WhatsApp
                        </button>
                    </div>

                    {/* Password Fields */}
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value="**********"
                            readOnly
                            className="border border-gray-300 rounded w-full px-3 py-2 text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">
                            New Password
                        </label>
                        <input
                            type="password"
                            className="border border-gray-300 rounded w-full px-3 py-2 text-sm"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="border border-gray-300 rounded w-full px-3 py-2 text-sm"
                        />
                    </div>

                    {/* Delete Account */}
                    <button className="text-red-500 hover:underline text-sm">
                        Delete account
                    </button>
                </div>
            </main>
        </div>
    );
}
