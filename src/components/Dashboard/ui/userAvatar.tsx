import React from 'react';

export default function UserAvatar({ initials }: { initials: string }) {
    return (
        <div className="bg-blue-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
            {initials}
        </div>
    );
}
