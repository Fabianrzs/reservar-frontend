import React from 'react';
import {Header} from "@/components/layout/header";

export function CustomerManagementHeader() {
    return (
        <Header
            title="Customer Management"
            buttonText="New Request"
            onButtonClick={() => alert('New Request')}
        />
    );
}
