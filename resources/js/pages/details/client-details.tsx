import { MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ClientDetailsModal({ client, onClose }) {
    if (!client) return null

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                <div
                    className="absolute inset-0 bg-black/50 z-5"
                    onClick={onClose} />
                <div className="bg-white rounded-lg w-full max-w-[60vw] min-h-[60vh] max-h-[100vh] overflow-y-auto z-10">

                    {/* Modal Header */}
                    <div className="flex justify-end border-b p-4 sticky top-0 bg-white">
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 "
                        >
                            <X size={24} className='cursor-pointer' />
                        </button>
                    </div>

                    {/* Modal Body */}
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Left Column */}
                            <div>
                                <div>
                                    <h1 className='text-[3em] leading-[1.2] font-extrabold mb-4'>{client.company_name}</h1>
                                    <div className='flex text-gray-800'>
                                        <MapPin className='mr-2' />
                                        Address Here
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-medium">Company Name</p>
                                        <p>{client.company_name}</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Address</p>
                                        <p>{client.address || 'Not specified'}</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Industry</p>
                                        <p>{client.field || 'Not specified'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional details */}
                        {/* <div className="mt-6">
                            <h4 className="font-semibold mb-4">Additional Information</h4>
                            <p>{client.notes || 'No additional information available.'}</p>
                        </div> */}
                    </div>

                    {/* Modal Footer */}
                    <div className="border-t p-4 flex justify-end space-x-3 sticky bottom-0 bg-white">
                        <Button variant="outline" onClick={onClose}>
                            Close
                        </Button>
                        <Button
                            variant="default"
                        >
                            View Full Profile
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}