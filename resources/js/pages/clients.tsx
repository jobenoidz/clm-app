import React, { useState } from 'react';
import AppLayout from '../layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { Building, ChevronRight, Contact, MapPin, User, X } from 'lucide-react';
import ClientDetailsModal from '../components/client-details';
import { Button } from '@/components/ui/button';
import { link } from 'fs';
import ClientFilterMenu from '@/components/client-filter';

interface Client {
    id: number;
    company_name: string;
    full_name: string;
    work_email: string;
    work_phone: string;
    status: string;
}

interface ClientsPageProps {
    clients: Client[];
}

export default function ClientsPage({ clients }: ClientsPageProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState<any>(null);
    const [clientStatus, setClientStatus] = useState<string | null>(null);

    const openModal = async (id: number, status: string) => {
        try {
            const response = await fetch(`/client/${id}`)
            const data = await response.json()
            // returns client, availed, and status

            setSelectedClient(data);
            setClientStatus(status);
            setIsModalOpen(true);
        } catch (e) {
            console.error("Error testFetch", e);
        }
    };

    const closeModal = () => {
        setSelectedClient(null);
        setClientStatus(null);
        setIsModalOpen(false);
    }

    return (
        <>
            <Head title="Client Contacts" />
            <AppLayout>
                <h2 className="text-xl font-semibold">Client Contacts</h2>
                <ClientFilterMenu />
                {/* Cards  */}
                <div className="w-[50%] min-w-[50lvw] grid grid-cols-1 gap-4 mt-4">
                    {clients.map((client) => (
                        <div
                            key={client.id}
                            onClick={() => openModal(client.id, client.status)}
                            className="flex items-center bg-white hover:bg-sky-50 p-4 rounded-xl shadow justify-between hover:shadow-lg transition-all"
                        >
                            <div className='flex w-[60%] grow-4'>
                                {/* Logo */}
                                <div className="mr-4 h-16 w-16 p-2 bg-gray-200 rounded-full flex items-center justify-center">
                                    <Building className="size-full text-gray-500" />
                                </div>

                                {/* Company and Contact */}
                                <div>
                                    <h3 className="text-xl font-bold">{client.company_name}</h3>

                                    {/* Name row */}
                                    <div className='flex items-center space-x-2 text-gray-600'>
                                        <User size={16} />
                                        <span className='text-[14px]'>{client.full_name}</span>
                                    </div>

                                    {/* Email and Phone */}
                                    <div className='flex items-center space-x-2 text-gray-700'>
                                        <Contact size={16} />
                                        <div className='whitespace-pre text-[13px]'>
                                            <a className='cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-2' href={`mailto:${client.work_email}`}>
                                                {client.work_email}
                                            </a>
                                            {client.work_phone ? ` • ${client.work_phone}` : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='grow-2 w-[25%]'>
                                {client.status}
                            </div>
                            <ChevronRight className='text-gray-500 hover:text-gray-700 cursor-pointer' />
                        </div>
                    ))}
                </div>

                {isModalOpen && selectedClient && (
                    <ClientDetailsModal
                        clientDetails={selectedClient}
                        status={clientStatus}
                        onClose={closeModal} />
                )
                }
            </AppLayout >
        </>
    );
}