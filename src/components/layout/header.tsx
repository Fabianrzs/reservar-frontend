import React from 'react';
import { Button } from "@/components/ui/button";

interface HeaderProps {
    title: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

export function Header({ title, buttonText, onButtonClick }: HeaderProps) {
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{title}</h1>
            {buttonText && (
                <Button onClick={onButtonClick}>{buttonText}</Button>
            )}
        </div>
    );
}
