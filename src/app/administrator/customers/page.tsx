"use client";
import React from 'react';
import {CustomerTable} from "@/components/ManagementCustomers/CustomerTable";
import {Header} from "@/components/layout/header";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

const data = {
    pending: [
        {
            name: "John Doe",
            email: "john@example.com",
            categories: ["Restaurant", "Cafe"],
            plan: { name: "Premium", price: "$99" },
            locations: [
                { address: "123 Main St, Anytown USA" },
                { address: "456 Oak Rd, Anytown USA" }
            ],
            contact: { name: "Jane Smith", phone: "+1 (234) 567-890" },
            paymentMethods: [
                { value: "credit-card", label: "Credit Card" },
                { value: "bank-transfer", label: "Bank Transfer" },
                { value: "paypal", label: "PayPal" }
            ]
        },
        {
            name: "Jane Doe",
            email: "jane@example.com",
            categories: ["Salon", "Spa"],
            plan: { name: "Standard", price: "$49" },
            locations: [
                { address: "789 Pine St, Anytown USA" },
                { address: "321 Maple Ave, Anytown USA" }
            ],
            contact: { name: "Sarah Johnson", phone: "+0 (987) 654-321" },
            paymentMethods: [
                { value: "credit-card", label: "Credit Card" },
                { value: "bank-transfer", label: "Bank Transfer" },
                { value: "paypal", label: "PayPal" }
            ]
        },
        {
            name: "Robert Brown",
            email: "robert@example.com",
            categories: ["Gym", "Fitness"],
            plan: { name: "Enterprise", price: "$199" },
            locations: [
                { address: "654 Willow St, Anytown USA" },
                { address: "876 Cedar Rd, Anytown USA" }
            ],
            contact: { name: "Emily Davis", phone: "+0 (123) 456-789" },
            paymentMethods: [
                { value: "credit-card", label: "Credit Card" },
                { value: "bank-transfer", label: "Bank Transfer" },
                { value: "paypal", label: "PayPal" }
            ]
        }
    ],
    approved: [
        {
            name: "Alice Green",
            email: "alice@example.com",
            categories: ["Tech", "Startup"],
            plan: { name: "Premium", price: "$99" },
            locations: [
                { address: "123 Silicon Valley, Techland USA" },
                { address: "456 Innovation Rd, Techland USA" }
            ],
            contact: { name: "Paul Walker", phone: "+1 (222) 333-4444" },
            paymentMethods: [
                { value: "credit-card", label: "Credit Card" }
            ]
        },
        {
            name: "Charlie Black",
            email: "charlie@example.com",
            categories: ["Restaurant", "Bar"],
            plan: { name: "Standard", price: "$49" },
            locations: [
                { address: "789 Food St, Dineville USA" }
            ],
            contact: { name: "Lucy White", phone: "+1 (555) 666-7777" },
            paymentMethods: [
                { value: "paypal", label: "PayPal" }
            ]
        }
    ],
    rejected: [
        {
            name: "Tom Gray",
            email: "tom@example.com",
            categories: ["Photography", "Art"],
            plan: { name: "Basic", price: "$29" },
            locations: [
                { address: "123 Shutter St, Capturetown USA" }
            ],
            contact: { name: "Anna Silver", phone: "+1 (888) 999-0000" },
            paymentMethods: [
                { value: "bank-transfer", label: "Bank Transfer" }
            ]
        },
        {
            name: "Nina Violet",
            email: "nina@example.com",
            categories: ["Event Planning", "Catering"],
            plan: { name: "Enterprise", price: "$199" },
            locations: [
                { address: "456 Party Rd, Festiville USA" }
            ],
            contact: { name: "Mark Gold", phone: "+1 (111) 222-3333" },
            paymentMethods: [
                { value: "credit-card", label: "Credit Card" }
            ]
        }
    ],
};

export default function Page() {
    return (
        <div className="flex flex-col ">
            <main className="flex-1 p-6">
                <Header
                    title="Customer Management"
                    buttonText="New Request"
                    onButtonClick={() => alert('New Request')}
                />
                <div className="grid gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Pending Requests</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CustomerTable data={data.pending} type="pending"/>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Approved Requests</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CustomerTable data={data.approved} type="approved"/>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Rejected Requests</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CustomerTable data={data.rejected} type="rejected"/>
                        </CardContent>
                    </Card>
                </div>

            </main>
        </div>
);
}