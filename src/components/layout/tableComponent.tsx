"use client";

import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { IconButton } from "@/components/layout/IconButton";

interface TableComponentProps {
    columns: string[];
    data: any[];
    actions?: Array<{ icon: JSX.Element, onClick: (item: any) => void }>;
}

const TableCellContent = ({ content }: { content: any }) => {
    if (typeof content === 'object' && content !== null) {
        if (Array.isArray(content)) {
            return (
                <div className="flex flex-wrap gap-1">
                    {content.map((item, index) => (
                        <span key={index} className="bg-gray-200 rounded px-2 py-1 text-sm">
                            {typeof item === 'object' ? Object.values(item).join(', ') : item}
                        </span>
                    ))}
                </div>
            );
        } else {
            return (
                <div>
                    {Object.entries(content).map(([key, value]) => (
                        <div key={key}>
                            <strong>{key}: </strong>{value}
                        </div>
                    ))}
                </div>
            );
        }
    }
    return <span>{content}</span>;
};

const TableRowComponent = ({ item, columns, actions }: { item: any; columns: string[]; actions?: Array<{ icon: JSX.Element, onClick: (item: any) => void }> }) => {
    return (
        <TableRow>
            {columns.map((col, colIndex) => (
                <TableCell key={colIndex}>
                    <TableCellContent content={item[col]} />
                </TableCell>
            ))}
            {actions && (
                <TableCell>
                    <div className="flex items-center gap-2">
                        {actions.map(({ onClick, icon }, actionIndex) => (
                            <IconButton key={actionIndex} icon={icon} onClick={() => onClick(item)} />
                        ))}
                    </div>
                </TableCell>
            )}
        </TableRow>
    );
};

export function TableComponent({ columns, data, actions }: TableComponentProps) {
    return (
        <div className="border rounded-lg overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((col, index) => (
                            <TableHead key={index}>{col}</TableHead>
                        ))}
                        {actions && <TableHead>Actions</TableHead>}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item, rowIndex) => (
                        <TableRowComponent key={rowIndex} item={item} columns={columns} actions={actions} />
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
