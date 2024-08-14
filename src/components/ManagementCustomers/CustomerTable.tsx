import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import {TableActions} from "@/components/ManagementCustomers/TableActions";

export function CustomerTable({ data, type }: { data: any[]; type: string }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Locations</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((customer, index) => (
                    <TableRow key={index}>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10 border">
                                    <AvatarImage src="/placeholder-user.jpg" alt="Customer Avatar" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-medium">{customer.name}</div>
                                    <div className="text-sm text-muted-foreground">{customer.email}</div>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex flex-wrap gap-2">
                                {customer.categories.map((category, idx) => (
                                    <Badge key={idx} variant="outline">{category}</Badge>
                                ))}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div>
                                <div className="font-medium">{customer.plan.name}</div>
                                <div className="text-sm text-muted-foreground">{customer.plan.price}/month</div>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="grid gap-2">
                                {customer.locations.map((location, idx) => (
                                    <div key={idx}>
                                        <div className="font-medium">{location.address}</div>
                                        <div className="text-sm text-muted-foreground">
                                            <Link href="#" className="underline" prefetch={false}>
                                                View on Map
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div>
                                <div className="font-medium">{customer.contact.name}</div>
                                <div className="text-sm text-muted-foreground">
                                    <Link href="#" prefetch={false}>
                                        {customer.contact.phone}
                                    </Link>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select payment method" />
                                </SelectTrigger>
                                <SelectContent>
                                    {customer.paymentMethods.map((method, idx) => (
                                        <SelectItem key={idx} value={method.value}>{method.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </TableCell>
                        <TableCell>
                            <Badge variant={type === "pending" ? "pending" : type === "approved" ? "success" : "destructive"}>
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </Badge>
                        </TableCell>
                        <TableCell>
                            <TableActions type={type} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
