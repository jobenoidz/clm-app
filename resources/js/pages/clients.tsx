import React from 'react';
import AppLayout from '../layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function ClientsPage() {
    return (
        <>
            <Head title="Client Contacts" />
            <AppLayout>
                <div className="p-6">
                    <h2 className="text-xl font-semibold">Client Contacts</h2>
                    {/* Your dashboard content */}
                </div>
            </AppLayout>
        </>
    );
} 