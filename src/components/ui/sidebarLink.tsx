import Link from "next/link";
import React from "react";

export default function SidebarLink({ href, name }: { href: string; name: string }) {
    return (
        <li>
            <Link href={href} className="text-base capitalize text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group">
                <span className="ml-3">{name}</span>
            </Link>
        </li>
    );
}
