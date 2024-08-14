import React from 'react';
import { Button } from "@/components/ui/button";

export function CustomerManagementHeader() {
    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold">Customer Management</h1>
                <p className="text-muted-foreground">Approve or reject customer registration requests.</p>
            </div>
            <Button className="mt-4 md:mt-0">New Request</Button>
        </div>
    );
}
