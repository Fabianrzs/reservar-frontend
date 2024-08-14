import React from 'react';
import { Button } from "@/components/ui/button";
import {CheckIcon, FilePenIcon, XIcon} from "@/components/icons";

export function TableActions({ type }: { type: string }) {
    return (
        <div className="flex gap-2">
            {type === "pending" && (
                <>
                    <Button variant="outline" size="icon">
                        <CheckIcon className="w-4 h-4" />
                        <span className="sr-only">Approve</span>
                    </Button>
                    <Button variant="outline" size="icon">
                        <XIcon className="w-4 h-4" />
                        <span className="sr-only">Reject</span>
                    </Button>
                </>
            )}
            {type === "approved" && (
                <>
                    <Button variant="outline" size="icon">
                        <FilePenIcon className="w-4 h-4" />
                        <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="outline" size="icon">
                        <XIcon className="w-4 h-4" />
                        <span className="sr-only">Reject</span>
                    </Button>
                </>
            )}
        </div>
    );
}
