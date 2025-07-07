import React, { useState } from 'react';
import AppLayout from '../layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Building, ChevronRight, Contact, User } from 'lucide-react';
import LeadFilterMenu from '@/components/leads-filter';
import LeadDetailsModal from '@/components/lead-details';

export default function LeadsPage({ leads }) {
    const [selectedLead, setSelectedLead] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = async (id: number) => {
        try {
            const response = await fetch(`/lead/${id}`)
            const data = await response.json()
            // returns client, availed, and status

            setSelectedLead(data.lead);
            setIsModalOpen(true);
        } catch (e) {
            console.error("Error testFetch", e);
        }
    };

    const closeModal = () => {
        setSelectedLead(null);
        setIsModalOpen(false);
    }

    return (
        <>
            <Head title="Leads Management" />
            <AppLayout>
                <div>
                    <h2 className="text-xl font-semibold">Leads Management</h2>
                    {/* Your dashboard content */}
                    <LeadFilterMenu />
                    <div className="w-[50%] min-w-[50lvw] grid grid-cols-1 gap-4 mt-4">
                        {leads.map((lead) => (
                            <div
                                key={lead.id}
                                onClick={() => openModal(lead.id)}
                                className="flex items-center bg-white hover:bg-orange-50 p-4 rounded-xl shadow justify-between hover:shadow-lg transition-all"
                            >
                                <div className='flex w-[60%] grow-4'>
                                    {/* Logo */}
                                    <div className="mr-4 h-16 w-16 p-2 bg-gray-200 rounded-full flex items-center justify-center">
                                        <Building className="size-full text-gray-500" />
                                    </div>

                                    {/* Company and Contact */}
                                    <div>
                                        <h3 className="text-xl font-bold">{lead.company_name}</h3>

                                        {/* Name row */}
                                        <div className='flex items-center space-x-2 text-gray-600'>
                                            <User size={16} />
                                            <span className='text-[14px]'>{lead.full_name}</span>
                                        </div>

                                        {/* Email and Phone */}
                                        <div className='flex items-center space-x-2 text-gray-700'>
                                            <Contact size={16} />
                                            <div className='whitespace-pre text-[13px]'>
                                                <a className='cursor-pointer hover:text-orange-600 hover:underline hover:underline-offset-2' href={`mailto:${lead.work_email}`}>
                                                    {lead.work_email}
                                                </a>
                                                {lead.work_phone ? ` • ${lead.work_phone}` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='grow-2 w-[25%]'>
                                    {lead.status}
                                </div>
                                <ChevronRight className='text-gray-500 hover:text-gray-700 cursor-pointer' />
                            </div>
                        ))}
                    </div>

                    {isModalOpen && selectedLead && (
                        <LeadDetailsModal
                            leadDetails={selectedLead}
                            onClose={closeModal} />
                    )
                    }
                </div>
            </AppLayout>
        </>
    );
} 