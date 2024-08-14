"use client"
import React from 'react';
import {PercentIcon, ViewIcon, TimerIcon, RatioIcon} from "@/components/icons";

interface UsabilityData {
    bounceRate: number;
    avgSessionDuration: number;
    pageViews: number;
    conversionRate: number;
}

export function UsabilityMetrics({ data }: { data: UsabilityData }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
                <PercentIcon className="w-8 h-8 mb-2" />
                <div className="text-4xl font-bold">{data.bounceRate}%</div>
                <div className="text-sm text-muted-foreground">Bounce Rate</div>
            </div>
            <div className="flex flex-col items-center">
                <TimerIcon className="w-8 h-8 mb-2" />
                <div className="text-4xl font-bold">{data.avgSessionDuration}s</div>
                <div className="text-sm text-muted-foreground">Avg. Session Duration</div>
            </div>
            <div className="flex flex-col items-center">
                <ViewIcon className="w-8 h-8 mb-2" />
                <div className="text-4xl font-bold">{data.pageViews}</div>
                <div className="text-sm text-muted-foreground">Page Views</div>
            </div>
            <div className="flex flex-col items-center">
                <RatioIcon className="w-8 h-8 mb-2" />
                <div className="text-4xl font-bold">{data.conversionRate}%</div>
                <div className="text-sm text-muted-foreground">Conversion Rate</div>
            </div>
        </div>
    );
}
