import { Circle, MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ServicesModalDetails from './client-services';

interface ClientType {
    id: number;
    company_name: string;
    address?: string;
    full_name: string;
    position?: string;
    work_email?: string;
    work_phone?: string;
    date_added?: string;
    category?: string;
    organization?: string;
    assigned_to?: any;
    assigned_user_name: string;
    assigned_user_email: string;
    org_head?: string;
    school_head?: string;
    head_email?: string;
}

interface ClientDetailsModalProps {
    clientDetails: { client: ClientType };
    status: string;
    onClose: () => void;
}

export default function ClientDetailsModal({ clientDetails, status, onClose }: ClientDetailsModalProps) {
    // Move hooks to top level
    const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
    const [clientServices, setClientServices] = useState<unknown>(null);
    const { client } = clientDetails;
    if (!client) return null;

    const openServicesModal = async (clientId: number) => {
        try {
            const response = await fetch(`client/${clientId}/services`);
            const data = await response.json();
            setClientServices(data.clientServices);
            setIsServicesModalOpen(true);
        } catch (e) {
            console.error("Error group service fetch", e);
        }
    }

    const closeServicesModal = () => {
        setClientServices(null);
        setIsServicesModalOpen(false);
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                <div
                    className="absolute inset-0 bg-black/50 z-1"
                    onClick={onClose}
                />
                <div className="relative flex bg-white rounded-2xl w-[60vw] min-h-[50vh] max-h-[100vh] overflow-auto z-2">
                    {/* Modal Body */}
                    <button
                        className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
                        onClick={onClose}
                    >
                        <X size={24} className='cursor-pointer' />
                    </button>
                    <div className="flex justify-between grow">
                        {/* Left Column */}
                        <div className="flex flex-col w-1/2 space-y-4 p-6">
                            <h1 className='text-[3em] leading-[1.2] font-extrabold mb-4 line-clamp-3'>
                                {client.company_name}
                            </h1>
                            <div className='flex text-gray-800 gap-4'>
                                <MapPin className='mr-2' />
                                {client.address}
                            </div>
                            <div className="flex gap-4">
                                <p className="font-medium w-32">Contact Person:</p> {/* Fixed width for labels */}
                                <p>{client.full_name}</p>
                            </div>
                            <div className="flex gap-4">
                                <p className="font-medium w-32">Position:</p>
                                <p>{client.position || 'Not specified'}</p>
                            </div>
                            <div className="flex gap-4">
                                <p className="font-medium w-32">Work Email:</p>
                                <p>{client.work_email || 'Not specified'}</p>
                            </div>
                            <div className="flex gap-4">
                                <p className="font-medium w-32">Work Phone:</p>
                                <p>{client.work_phone || 'Not specified'}</p>
                            </div>
                            <div className="flex flex-col gap-4 mt-10">
                                <p className="font-medium">Person In Charge:</p>
                                {client.assigned_to ? (
                                    <div className="w-full h-24 flex flex-col items-center justify-center bg-white border-2 border-solid border-gray-400 rounded-lg mt-2 mb-4">
                                        <span className="text-lg font-semibold">{client.assigned_user_name}</span>
                                        <span className="text-sm text-gray-500">{client.assigned_user_email}</span>
                                        <span>test</span>
                                    </div>
                                ) : (
                                    <div className="w-full h-24 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg mt-2 mb-4">
                                        <span className="text-lg text-gray-400">No Assigned Manager</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <span className='border-primary md:border-r-2 border-r-0' />
                        {/* Right Column */}
                        <div className="flex flex-col w-1/2 space-y-2 p-6 justify-between bg-[#e7f3ff]">
                            <div className="flex gap-4">
                                <p className="font-medium w-32">Status:</p> {/* Fixed width for labels */}
                                <div className="flex space-x-2">
                                    <Circle fill='green'></Circle>
                                    <p>{status}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <p className="font-medium w-32">Date Added:</p> {/* Fixed width for labels */}
                                <p>{client.date_added}</p>
                            </div>
                            <div className="flex gap-4">
                                <p className="font-medium w-32">Category:</p>
                                <p>{client.category || 'Not specified'}</p>
                            </div>
                            {client.organization &&
                                <>
                                    <div className="flex gap-4">
                                        <p className="font-medium w-32">Organization:</p>
                                        <p>{client.organization}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <p className="font-medium w-32">Org. Head:</p>
                                        <p>{client.org_head}</p>
                                    </div>
                                </>
                            }
                            <div className="flex gap-4">
                                <p className="font-medium w-32">School Head:</p>
                                <p>{client.school_head}</p>
                            </div>
                            <div className="flex gap-4">
                                <p className="font-medium w-32">Head Email:</p>
                                <p>{client.head_email}</p>
                            </div>
                            <Button
                                className="bg-[#ff802b] text-xl rounded-full hover:bg-[#ff5e00] w-[100%]"
                                onClick={() => openServicesModal(client.id)}
                            >
                                Availed Services
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {
                isServicesModalOpen && (
                    <ServicesModalDetails
                        clientName={client.company_name}
                        services={clientServices}
                        onServicesClose={closeServicesModal}
                    ></ServicesModalDetails>
                )}
        </>
    );
}