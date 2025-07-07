import { Circle, MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import GroupModalDetails from './client-group-services';

interface AvailedItem {
    group_id: number,
    group_name: string
}

// interface ClientDetailsData {
//     client: Object,
//     availed: Array<Object>,
//     status: Object
// }

export default function ClientDetailsModal({ clientDetails, status, onClose }) {
    const { client, availed } = clientDetails;
    if (!client) return null

    const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState<any>(null);
    const [groupName, setGroupName] = useState<string | null>(null);

    const openGroupModal = async (clientId: number, groupId: number, groupName: string) => {
        try {
            const response = await fetch(`client/${clientId}/${groupId}`);
            const data = await response.json();

            setSelectedGroup(data.groupServices);
            setGroupName(groupName);
            setIsGroupModalOpen(true);

        } catch (e) {

            console.error("Error group service fetch", e);
        }

    }

    const closeGroupModal = () => {
        setSelectedGroup(null);
        setGroupName(null);
        setIsGroupModalOpen(false);
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                <div
                    className="absolute inset-0 bg-black/50 z-1"
                    onClick={onClose}
                />
                <div className="relative flex flex-col bg-white rounded-2xl w-[60vw] min-h-[50vh] max-h-[100vh] overflow-auto z-2">
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
                                <h1 className='text-[3em] leading-[1.2] font-extrabold mb-4 line-clamp-3'>
                                    {client.company_name}
                                </h1>
                                <div className='flex'>
                                    <p className='font-medium text-gray-900 mr-2'>
                                        Status:
                                    </p>
                                    <Circle className='mr-1' fill='green'></Circle>
                                    <p>{status}</p>
                                </div>
                                <div className='flex text-gray-800'>
                                    <MapPin className='mr-2' />
                                    {client.address}
                                </div>
                            </div>
                            <span className='border-primary md:border-r-2 border-r-0' />
                            {/* Right Column */}
                            <div className="flex w-[45%] items-center">
                                <div className="space-y-2">
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
                    <div className="border-t p-5 flex grow justify-between space-x-3 sticky bottom-0 bg-[#e7f3ff] z-2 overflow-auto">
                        {/* Left Column */}
                        <div className="space-y-2">
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
                        </div>
                        <div className='border-primary border-1' />

                        {/* Right Column */}
                        <div className="flex w-[45%]">
                            <div className="space-y-2">
                                <p className=''>
                                    Availed Services
                                </p>
                                {availed.map((item: AvailedItem) =>
                                    <Button
                                        key={item.group_id}
                                        className="bg-[#ff802b] text-xl rounded-full hover:bg-[#ff5e00] w-[100%]"
                                        onClick={() => openGroupModal(client.id, item.group_id, item.group_name)}
                                    >
                                        {item.group_name}
                                    </Button>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {
                isGroupModalOpen && (
                    <GroupModalDetails
                        clientName={client.company_name}
                        group={selectedGroup}
                        groupName={groupName}
                        onGroupClose={closeGroupModal}
                    ></GroupModalDetails>
                )}
        </>
    );
}