import React from 'react';
import UserAvatar from "@/components/ui/userAvatar";

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button
                            id="toggleSidebarMobile"
                            aria-expanded="true"
                            aria-controls="sidebar"
                            className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                        >
                            {/* SVG Icons */}
                        </button>
                        <a
                            href=""
                            className="text-xl font-bold flex items-center lg:ml-2.5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
                                <rect width="256" height="256" fill="none"></rect>
                                <line
                                    x1="208"
                                    y1="128"
                                    x2="128"
                                    y2="208"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                ></line>
                                <line
                                    x1="192"
                                    y1="40"
                                    x2="40"
                                    y2="192"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                ></line>
                            </svg>
                            <span className="self-center whitespace-nowrap ml-2">Reservar-App</span>
                        </a>
                    </div>
                    <UserAvatar initials="FH" />
                </div>
            </div>
        </nav>
    );
}
