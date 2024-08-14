import React from "react";

export default function MainContent({ children }: { children: React.ReactNode }) {
    return (
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
        </div>
    );
}
