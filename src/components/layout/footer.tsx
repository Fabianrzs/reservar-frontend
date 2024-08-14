import React from 'react';
import SocialLinks from "@/components/ui/socialLinks";

export default function Footer() {
    return (
        <footer className="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
            <ul className="flex items-center flex-wrap mb-6 md:mb-0">
                {/* Footer links */}
                <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Terms and conditions</a></li>
                <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Privacy Policy</a></li>
                <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Licensing</a></li>
                <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Cookie Policy</a></li>
                <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline">Contact</a></li>
            </ul>
            <SocialLinks />
        </footer>
    );
}
