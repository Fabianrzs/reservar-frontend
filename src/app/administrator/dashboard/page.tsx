"use client"
import React, { useState } from 'react';
import { Cards } from "@/components/dashboard/Cards";
import { LinechartChart } from "@/components/dashboard/LinechartChart";
import { UsabilityMetrics } from "@/components/dashboard/UsabilityMetrics";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
    DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function Page() {
    const [selectedPeriod, setSelectedPeriod] = useState("month");
    const [selectedMetric, setSelectedMetric] = useState("users");

    const data = {
        users: {
            registered: 12345,
            active: 10234,
            inactive: 1111,
            logins: 23456,
        },
        usability: {
            bounceRate: 25,
            avgSessionDuration: 120,
            pageViews: 50000,
            conversionRate: 3.5,
        },
    };

    const handlePeriodChange = (period) => setSelectedPeriod(period);
    const handleMetricChange = (metric) => setSelectedMetric(metric);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <Cards data={data.users} />
            <div className="col-span-1 md:col-span-2 lg:col-span-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Plans Consumption</CardTitle>
                        <div className="flex gap-4">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        {selectedPeriod === "month"
                                            ? "Last Month"
                                            : selectedPeriod === "quarter"
                                                ? "Last Quarter"
                                                : "Last Year"}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuRadioGroup value={selectedPeriod} onValueChange={handlePeriodChange}>
                                        <DropdownMenuRadioItem value="month">Last Month</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="quarter">Last Quarter</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="year">Last Year</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        {selectedMetric === "users" ? "Users" : selectedMetric === "revenue" ? "Revenue" : "Engagement"}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuRadioGroup value={selectedMetric} onValueChange={handleMetricChange}>
                                        <DropdownMenuRadioItem value="users">Users</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="revenue">Revenue</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="engagement">Engagement</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <LinechartChart className="aspect-[16/9]" />
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Usability Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <UsabilityMetrics data={data.usability} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
