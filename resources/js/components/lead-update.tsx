import type { Lead } from '../pages/leads';
import { useState } from 'react';
import LeadUpdateExtension from './lead-update-extension';
import { DeleteIcon } from 'lucide-react';

interface LeadUpdateProps {
    leadDetails: Lead;
    onClose: () => void;
}

export default function LeadUpdate({ leadDetails, onClose }: LeadUpdateProps) {
    const lead = leadDetails;
    if (!lead) return null;

    const statusOptions = [
        'New',
        'Contacted',
        'For Follow-up',
        'Interested',
        'Converted',
        'Rejected',
        'Lost',
    ];
    const [selectedStatus, setSelectedStatus] = useState(lead.status);
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    const [assignedUser, setAssignedUser] = useState({
        assigned_to: lead.assigned_to,
        assigned_user_name: lead.assigned_user_name,
        assigned_user_email: lead.assigned_user_email,
    });

    const handleSave = async () => {
        await fetch(`/lead/${lead.id}/update-status`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '',
            },
            body: JSON.stringify({ status: selectedStatus }),
        });
        // Only update assigned rep if changed
        await fetch(`/lead/${lead.id}/assign-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '',
            },
            body: JSON.stringify({ user_id: assignedUser.assigned_to ?? null }),
        });
        onClose();
        window.location.reload();
    };

    const handleAssign = async (userId: number) => {
        await fetch(`/lead/${lead.id}/assign-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '',
            },
            body: JSON.stringify({ user_id: userId }),
        });
        setIsAssignModalOpen(false);
        // Find the assigned rep from the extension modal's list
        // We'll pass a callback to LeadUpdateExtension to provide the rep info
    };

    const handleAssignWithRep = (userId: number, rep: {id: number, name: string, email: string}) => {
        setAssignedUser({
            assigned_to: rep.id,
            assigned_user_name: rep.name,
            assigned_user_email: rep.email,
        });
        setIsAssignModalOpen(false);
    };

    const handleClearAssignment = () => {
        setAssignedUser({
            assigned_to: undefined,
            assigned_user_name: undefined,
            assigned_user_email: undefined,
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-white opacity-40"
            />
            {/* Options menu */}
            <div className="relative z-100 bg-white p-8 rounded-xl shadow-lg min-w-[350px] flex flex-col items-left">
                <h1 className="text-2xl font-bold mb-4">{lead.company_name}</h1>
                <h2 className="text-xl font-bold mb-4">Update Lead Status</h2>
                <select
                    className="mb-6 text-lg text-gray-700 border rounded px-2 py-1"
                    value={selectedStatus}
                    onChange={e => setSelectedStatus(e.target.value)}
                >
                    {statusOptions.map((status) => (
                        <option key={status} value={status}>{status}</option>
                    ))}
                </select>
                <div className="flex flex-row justify-between">
                    <h3 className="text-xl font-semibold mb-2">Assign Lead</h3> 
                </div>
                <div
                    className="mb-4 text-md text-gray-700 cursor-pointer border border-gray-300 rounded-lg p-4 hover:bg-orange-50 transition flex items-center justify-between"
                    onClick={() => setIsAssignModalOpen(true)}
                >
                    <div>
                        {assignedUser.assigned_user_name ? (
                            <>
                                <div className="font-semibold">{assignedUser.assigned_user_name}</div>
                                <div className="text-sm text-gray-500">{assignedUser.assigned_user_email}</div>
                            </>
                        ) : (
                            <span className="text-gray-400">Unassigned</span>
                        )}
                    </div>
                    <button className="text-m text-red-400 font-semibold mb-2" 
                            onClick={e => { e.stopPropagation(); handleClearAssignment(); }}>
                            <DeleteIcon></DeleteIcon>
                    </button>
                </div>
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSave}
                    className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                >
                    Save
                </button>
            </div>
            <LeadUpdateExtension
                isOpen={isAssignModalOpen}
                onClose={() => setIsAssignModalOpen(false)}
                onAssign={handleAssignWithRep}
                currentAssignedId={assignedUser.assigned_to}
            />
        </div>
    );
}



