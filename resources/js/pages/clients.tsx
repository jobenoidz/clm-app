import React, { useState } from 'react';
import AppLayout from '../layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Building, ChevronRight, Contact, MapPin, User, X } from 'lucide-react';
import ClientDetailsModal from '../components/client-details';

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
                {/* Cards  */}
                <div className="w-[50%] min-w-[50lvw] grid grid-cols-1 gap-4 mt-4">
                    {clients.map((client, index) => (
                        <div
                            key={client.id}
                            onClick={() => openModal(client.id, client.status)}
                            className="flex items-center bg-white p-4 rounded-xl shadow justify-between cursor-pointer hover:shadow-md transition-shadow"
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
                                        <span className='whitespace-pre text-[13px]'>
                                            {client.work_email}{client.work_phone ? ` • ${client.work_phone}` : ''}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='grow-2 w-[25%]'>
                                {client.status}
                            </div>
                            <ChevronRight className='text-gray-500 hover:text-gray-700' />
                        </div>
                    ))}
                </div>

                {isModalOpen && selectedClient && (
                    <ClientDetailsModal
                        clientDetails={selectedClient}
                        status={clientStatus}
                        // availed={selectedAvailed}
                        // status={selectedStatus}
                        onClose={closeModal} />
                )
                }
            </AppLayout>
        </>
    );
}