// client-details.tsx
import { MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface ClientDetailsModalProps {
    clientId: number | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ClientDetailsModal({ clientId, isOpen, onClose }: ClientDetailsModalProps) {
    const [client, setClient] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isOpen || !clientId) return;

        const fetchClientDetails = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`/clients/${clientId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch client details');
                }
                const data = await response.json();
                setClient(data.client);
            } catch (error) {
                console.error('Error fetching client details:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchClientDetails();
    }, [isOpen, clientId]);

    // Clear client data when modal closes
    useEffect(() => {
        if (!isOpen) {
            setClient(null);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />
            <div className="bg-white rounded-lg w-full max-w-4xl min-h-[60vh] max-h-[90vh] overflow-y-auto z-10 relative">
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b p-4 sticky top-0 bg-white">
                    <h3 className="text-xl font-bold">
                        {isLoading ? 'Loading...' : client?.company_name || 'Client Details'}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X size={24} className='cursor-pointer' />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                    <p>{client.company_name}</p>

                </div>

                {/* Modal Footer */}
                <div className="border-t p-4 flex justify-end space-x-3 sticky bottom-0 bg-white">
                    <Button variant="outline" onClick={onClose}>
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
}

// {
//     isLoading ? (
//         <div className="flex justify-center items-center h-40">
//             <p>Loading client details...</p>
//         </div>
//     ) : client ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Left Column */}
//             <div>
//                 <div>
//                     <h1 className='text-[3em] leading-[1.2] font-extrabold mb-4'>{client.company_name}</h1>
//                     <div className='flex text-gray-800'>
//                         <MapPin className='mr-2' />
//                         {client.address || 'Address not specified'}
//                     </div>
//                 </div>
//             </div>

//             {/* Right Column */}
//             <div>
//                 <div className="space-y-4">
//                     <div>
//                         <p className="font-medium">Contact Person</p>
//                         <p>{client.full_name}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium">Position</p>
//                         <p>{client.position || 'Not specified'}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium">Email</p>
//                         <p>{client.work_email}</p>
//                     </div>
//                     <div>
//                         <p className="font-medium">Phone</p>
//                         <p>{client.work_phone}</p>
//                     </div>
//                     {client.field && (
//                         <div>
//                             <p className="font-medium">Field</p>
//                             <p>{client.field}</p>
//                         </div>
//                     )}
//                     {client.organization && (
//                         <div>
//                             <p className="font-medium">Organization</p>
//                             <p>{client.organization}</p>
//                         </div>
//                     )}
//                     {client.org_head && (
//                         <div>
//                             <p className="font-medium">Organization Head</p>
//                             <p>{client.org_head}</p>
//                         </div>
//                     )}
//                     {client.head_email && (
//                         <div>
//                             <p className="font-medium">Head Email</p>
//                             <p>{client.head_email}</p>
//                         </div>
//                     )}
//                     {client.date_added && (
//                         <div>
//                             <p className="font-medium">Date Added</p>
//                             <p>{new Date(client.date_added).toLocaleDateString()}</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     ) : (
//         <div className="flex justify-center items-center h-40">
//             <p>No client data available</p>
//         </div>
//     )
// }