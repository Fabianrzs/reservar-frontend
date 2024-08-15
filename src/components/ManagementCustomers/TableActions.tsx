import React from 'react';
import { TableComponent } from "@/components/common/TableComponent";
import EyeIcon from "@/components/common/Icons/EyeIcon";
import FilePenIcon from "@/components/common/Icons/FilePenIcon";
import TrashIcon from "@/components/common/Icons/TrashIcon";

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
