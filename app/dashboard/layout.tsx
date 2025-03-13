import type { Metadata } from "next";
import "../globals.css";
import SideNav from '../components/SideNav'
import Header from '../components/Header';

export const metadata: Metadata = {
    title: "Dashboard | aorthar.io",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <>
                <div className="flex h-screen">
                    <SideNav />
                    <main className="bg-[#f5f7fc] w-full overflow-y-scroll styled-scrollbar">
                        <Header />
                        {children}
                    </main>
                </div>
            </>
        </>
    );
}
