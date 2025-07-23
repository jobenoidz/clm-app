import React, { useState } from 'react';
import AppLayout from '../layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Building, ChevronRight, Contact, Download, ListFilter, Plus, User } from 'lucide-react';
import ClientDetailsModal from '../components/client-details';
import { Button } from '@/components/ui/button';
import ClientFilterMenu from '@/components/client-filter';
import AddClientModal from '@/components/client-add';

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
    // selectedClient should have a 'client' property for ClientDetailsModal
    const [selectedClient, setSelectedClient] = useState<{ client: Client } | null>(null);
    const [clientStatus, setClientStatus] = useState<string>('');

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
        setClientStatus(''); // Use empty string instead of null
        setIsModalOpen(false);
    }

    const [isAddClientOpen, setIsAddClientOpen] = useState(false);

    const openAddClient = () => {
        setIsAddClientOpen(true);
    }

    return (
        <>
            <Head title="Client Contacts" />
            <AppLayout>
                <h2 className="text-xl font-semibold">Client Contacts</h2>
                <div className='flex justify-between mb-4'>
                    <div className='flex border-2 items-center rounded-xl px-3 gap-3'>
                        <ListFilter />
                        <input placeholder='Type to filter...' className='focus:outline-none' />
                    </div>
                    {/* Add Client */}
                    <div className='flex gap-4'>
                        <Button className='hover:cursor-pointer' onClick={() => openAddClient()}>
                            <Plus />
                            Add New Client
                        </Button>
                        <Button variant={'outline'} className='text-primary border-primary'>
                            <Download />
                            Export List
                        </Button>
                    </div>
                </div>
                <ClientFilterMenu />
                {/* Cards  */}
                <div className="grid grid-cols-1 gap-4 mt-4">
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

                {isAddClientOpen && (
                    <AddClientModal />
                )
                }
            </AppLayout >
        </>
    );
}