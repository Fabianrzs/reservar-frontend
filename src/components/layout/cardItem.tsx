import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IconButton } from "@/components/layout/IconButton";

interface CardItemProps {
    title: string;
    items: Array<{ value: string, icon: JSX.Element}>;

}

export function CardItem({ title, items }: CardItemProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    {items.map(({value, icon}, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <span>{value}</span>
                            <IconButton  icon={icon}/>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
