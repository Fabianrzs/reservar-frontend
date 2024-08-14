import React from 'react';
import Navbar from "@/components/Dashboard/layout/navbar";
import Sidebar from "@/components/Dashboard/layout/sidebar";
import Footer from "@/components/Dashboard/layout/footer";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div className="flex overflow-hidden bg-white pt-16">
                <Sidebar />
                <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                    <main>
                        <div className="pt-6 px-4">
                            <div className="w-full min-h-[calc(100vh-230px)]">
                                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
}
