import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface DataProps {
    registered: number;
    active: number;
    inactive: number;
    logins: number;
}

export function Cards({ data }: { data: DataProps }) {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Registered Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-4xl font-bold">{data.registered}</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Active Customers</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-4xl font-bold">{data.active}</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Inactive Customers</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-4xl font-bold">{data.inactive}</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Logins/Visits</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-4xl font-bold">{data.logins}</div>
                </CardContent>
            </Card>
        </>
    );
}
