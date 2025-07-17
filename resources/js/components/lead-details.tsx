import { Circle, MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AvailedItem {
    group_id: number,
    group_name: string
}

// interface ClientDetailsData {
//     client: Object,
//     availed: Array<Object>,
//     status: Object
// }

export default function LeadDetailsModal({ leadDetails, onClose }) {
    const lead = leadDetails
    if (!lead) return null

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                <div
                    className="absolute inset-0 bg-black/50 z-1"
                    onClick={onClose}
                />
                <div className="relative flex flex-col bg-white rounded-2xl w-[60vw] min-h-[50vh] max-h-[80vh] overflow-auto z-2">
                    {/* Modal Body */}
                    <div className="p-5">
                        <button
                            className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
                            onClick={onClose}
                        >
                            <X size={24} className='cursor-pointer' />
                        </button>
                        <div className="flex justify-between">
                            {/* Left Column */}
                            <div className="flex flex-col w-[50%] justify-between">
                                <h1 className='text-[3em] leading-[1.2] font-extrabold mb-1 line-clamp-3'>
                                    {lead.company_name}
                                </h1>
                                <div className='flex'>
                                    <p className='font-medium text-gray-900 mr-2'>
                                        Key Decision Maker:
                                    </p>
                                    <p>{lead.key_decision_maker}</p>
                                </div>
                                <div className='flex'>
                                    <p className='font-medium text-gray-900 mr-2'>
                                        Domain:
                                    </p>
                                    <p className='tracking-wide italic'>{lead.domain}</p>
                                </div>
                                <div className='flex text-gray-800 mt-4'>
                                    <MapPin className='mr-2' />
                                    {lead.address}
                                </div>
                            </div>
                            <span className='border-primary md:border-r-2 border-r-0' />
                            {/* Right Column */}
                            <div className="flex w-[45%] items-center">
                                <div className="space-y-2">
                                    <div className="flex gap-4">
                                        <p className="font-medium w-32">Status:</p>
                                        <div className="flex space-x-2">
                                            <Circle fill='green'></Circle>
                                            <p>{lead.status}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <p className="font-medium w-32">RT Date:</p>
                                        <p>{lead.rt_date}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <p className="font-medium w-32">Lead Source:</p>
                                        <p>{lead.source}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <p className="font-medium w-32">Date Added:</p>
                                        <p>{lead.date_added}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <p className="text-sm font-medium w-32">Initial Contact Date:</p>
                                        <p>{lead.initial_contact_date}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <p className="text-sm font-medium w-32">Last Contacted:</p>
                                        <p>{lead.last_contacted}</p>
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
                    <div className="border-t p-5 flex space-x-3 bottom-0 bg-[#e7f4ff] z-2 overflow-auto">
                        {/* Left Column (Non-scrollable) */}
                        <div className="space-y-2 grow-1 min-w-[40%]"> {/* Adjust width as needed */}
                            <div className="flex gap-4">
                                <p className="font-medium w-32">Contact Person:</p>
                                <p>{lead.full_name}</p>
                            </div>
                            <div className="flex gap-4">
                                <p className="font-medium w-32">Position:</p>
                                <p>{lead.position || 'Not specified'}</p>
                            </div>
                            <div className="flex gap-4">
                                <p className="font-medium w-32">Work Email:</p>
                                <p>{lead.work_email || 'Not specified'}</p>
                            </div>
                            <div className="flex gap-4">
                                <p className="font-medium w-32">Work Phone:</p>
                                <p>{lead.work_phone || 'Not specified'}</p>
                            </div>
                            <div className="flex gap-4 mt-10">
                                <p className="font-medium">Person In Charge:</p>
                                <p>{lead.assigned_to || 'Not specified'}</p>
                            </div>
                        </div>

                        {/* Vertical Divider */}
                        <div className='border-primary border-r-2 mr-3 ml-3' />

                        {/* Right Column (Scrollable) */}
                        <div className="flex flex-col overflow-y-auto max-h-[50vh] w-full"> {/* Adjust max-height as needed */}
                            <div className='mb-5'>
                                <h1 className='font-bold mr-5'>Due Date: {lead.timeline}</h1>
                            </div>
                            <div className='mb-5'>
                                <h1 className='font-bold'>Challenges</h1>
                                <p className='ml-4'>{lead.challenges}</p>
                            </div>
                            <div className='mb-5'>
                                <h1 className='font-bold'>Remarks</h1>
                                <p className='ml-4'>{lead.remarks}</p>
                            </div>
                            <div className='mb-5'>
                                <h1 className='font-bold'>Needs</h1>
                                <p className='ml-4'>{lead.needs}</p>
                            </div>
                            <div className='mb-5'>
                                <h1 className='font-bold'>Notes</h1>
                                <p className='ml-4'>{lead.notes}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}