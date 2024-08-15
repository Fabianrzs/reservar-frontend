"use client";
import React from 'react';
import {EyeIcon, FilePenIcon, TrashIcon} from "@/components/icons";
import {TableComponent} from "@/components/layout/tableComponent";

export function CustomerTable({ data, type }: { data: any[], type: string }) {
    const columns = ['name', 'email', 'categories', 'plan', 'locations', 'contact', 'paymentMethod'];

    const actions = type === 'pending' ? [
        { icon: <EyeIcon className="h-4 w-4" />, onClick: (item) => alert(`Preview ${item.name}`) },
        { icon: <FilePenIcon className="h-4 w-4" />, onClick: (item) => alert(`Edit ${item.name}`) },
        { icon: <TrashIcon className="h-4 w-4" />, onClick: (item) => alert(`Delete ${item.name}`) },
    ] : [
        { icon: <FilePenIcon className="h-4 w-4" />, onClick: (item) => alert(`Edit ${item.name}`) },
        { icon: <TrashIcon className="h-4 w-4" />, onClick: (item) => alert(`Delete ${item.name}`) },
    ];

    return (
        <TableComponent
            columns={columns}
            data={data}
            actions={actions}
        />
    );
}
