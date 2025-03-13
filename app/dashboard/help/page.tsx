import React from 'react';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* Top Bar */}
            <header className="p-4">
                <h1 className="text-sm font-semibold">Editor</h1>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-4">
                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="border border-[#0000001a] rounded-lg shadow p-4 flex flex-col">
                        <Image
                            src={"/images/016.svg"}
                            alt=''
                            width={100}
                            height={100}
                        />
                        <h2 className="text-lg font-semibold mb-1">Onboarding</h2>
                        <p className="text-sm text-gray-500 mb-2">
                            Last updated: Jul 04, 2023
                        </p>
                        <p className="text-sm text-gray-700">
                            how much does each user generate to/ for us per year. how much
                            money did we spend to acquire a user, etc
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-[#0000001a]  rounded-lg shadow p-4 flex flex-col">
                        <Image
                            src={"/images/033.svg"}
                            alt=''
                            width={100}
                            height={100}
                            className="h-[100px]"
                        />
                        <h2 className="text-lg font-semibold mb-1">Community Guideline</h2>
                        <p className="text-sm text-gray-500 mb-2">
                            Last updated: Jul 04, 2023
                        </p>
                        <p className="text-sm text-gray-700">
                            how much does each user generate to/ for us per year. how much
                            money did we spend to acquire a user, etc
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="border border-[#0000001a] rounded-lg shadow p-4 flex flex-col">
                        <Image
                            src={"/images/010.svg"}
                            alt=''
                            width={100}
                            height={100}
                        />
                        <h2 className="text-lg font-semibold mb-1">Login Complaints</h2>
                        <p className="text-sm text-gray-500 mb-2">
                            Last updated: Jul 04, 2023
                        </p>
                        <p className="text-sm text-gray-700">
                            how much does each user generate to/ for us per year. how much
                            money did we spend to acquire a user, etc
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="border border-[#0000001a] rounded-lg shadow p-4 flex flex-col">
                        <Image
                            src={"/images/006.svg"}
                            alt=''
                            width={100}
                            height={100}
                        />
                        <h2 className="text-lg font-semibold mb-1">FAQ</h2>
                        <p className="text-sm text-gray-500 mb-2">
                            Last updated: Jul 04, 2023
                        </p>
                        <p className="text-sm text-gray-700">
                            how much does each user generate to/ for us per year. how much
                            money did we spend to acquire a user, etc
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
