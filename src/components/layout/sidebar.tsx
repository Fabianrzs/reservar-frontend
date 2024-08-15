import React from 'react';
import SidebarLink from "@/components/ui/sidebarLink";

const links = [
    { name: "Dashboard", href: "dashboard" },
    { name: "Customers", href: "customers" },
    { name: "Email Templates", href: "email-templates" },
    { name: "Payment Method", href: "payment-method" },
];

export default function Sidebar() {
    return (
        <aside
            id="sidebar"
            className="fixed hidden z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
            aria-label="Sidebar"
        >
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                    <div className="flex-1 px-3 bg-white divide-y space-y-1">
                        <ul className="space-y-2 pb-2">
                            {links.map(link => (
                                <SidebarLink key={link.href} href={link.href} name={link.name} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    );
}
