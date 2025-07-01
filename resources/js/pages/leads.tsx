import React from 'react';
import AppLayout from '../layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function LeadsPage() {
    return (
        <>
            <Head title="Leads Management" />
            <AppLayout>
                <div>
                    <h2 className="text-xl font-semibold">Leads Management</h2>
                    {/* Your dashboard content */}
                </div>
            </AppLayout>
        </>
    );
} 