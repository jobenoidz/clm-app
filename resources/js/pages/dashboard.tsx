import React from 'react';
import AppLayout from '../layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <AppLayout>
                <div className="p-6">
                    <h2 className="text-xl font-semibold">Dashboard</h2>
                    {/* Your dashboard content */}
                </div>
            </AppLayout>
        </>
    );
} 