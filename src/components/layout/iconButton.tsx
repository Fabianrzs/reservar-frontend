"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

interface IconButtonProps {
    icon: JSX.Element;
    onClick?: () => void;
}

export function IconButton({ icon, onClick }: IconButtonProps) {
    return (
        <Button variant="outline" size="icon" onClick={onClick}>
            {icon}
        </Button>
    );
}
