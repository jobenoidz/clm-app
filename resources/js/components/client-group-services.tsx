import { ChevronDown, ChevronUp, Circle, Ham, MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";


interface AvailedItem {
    group_id: number,
    group_name: string
}

// interface ClientDetailsData {
//     client: Object,
//     availed: Array<Object>,
//     status: Object
// }

export default function GroupModalDetails({ clientName, group, groupName, onGroupClose }) {
    if (!group) return null
    const [expandedRow, setExpandedRow] = useState<number | null>(null);

    const toggleRow = (id: number) => {
        setExpandedRow(expandedRow === id ? null : id);
    };


    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                <div
                    className="absolute inset-0 z-1 bg-black/20"
                    onClick={onGroupClose}
                />
                <div className="flex flex-col bg-white rounded-2xl w-[60vw] min-h-[50vh] max-h-[100vh] overflow-auto z-2">
                    {/* Group Modal Header */}
                    <div className="p-4 justify-between flex items-center">
                        <span className='text-xl font-bold'>{clientName} - {groupName}</span>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={onGroupClose}
                        >
                            <X size={24} className='cursor-pointer' />
                        </button>
                    </div>
                    {/* Group Modal Body */}
                    <div className="border-t p-5 flex justify-between space-x-3 sticky bottom-0 bg-[#fafdff] z-2 overflow-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>SQ #</TableHead>
                                    <TableHead>Service Availed</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Contract Type</TableHead>
                                    <TableHead>Date Signed</TableHead>
                                    <TableHead>Valid Until</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {group.map((groupItem) => (
                                    <>
                                        <TableRow
                                            key={groupItem.id}
                                            className={`hover:bg-sky-200 cursor-pointer relative ${expandedRow === groupItem.id ? 'bg-sky-100 shadow-inner' : ''}`}
                                            onClick={() => toggleRow(groupItem.id)}
                                        >
                                            <TableCell className="italic">{groupItem.sq_num}</TableCell>
                                            <TableCell className="font-bold">{groupItem.service_name}</TableCell>
                                            <TableCell>{groupItem.status}</TableCell>
                                            <TableCell>{groupItem.contract_type}</TableCell>
                                            <TableCell>{groupItem.date_signed}</TableCell>
                                            <TableCell>{groupItem.date_signed}</TableCell>
                                            <TableCell>
                                                {expandedRow === groupItem.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                            </TableCell>
                                        </TableRow>

                                        {expandedRow === groupItem.id && (
                                            <TableRow className="bg-blue-50">
                                                <TableCell colSpan={7} className="p-0 border-t-2 border-sky-200">
                                                    <div className="p-4 pl-8 relative">
                                                        {/* Left border connector */}
                                                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-sky-600"></div>
                                                        <h4 className="font-bold mb-2">Additional Details</h4>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div>
                                                                <p><span className="font-semibold">Service ID:</span> {groupItem.id}</p>
                                                                <p><span className="font-semibold">SQ Number:</span> {groupItem.sq_num}</p>
                                                                <p><span className="font-semibold">Status:</span> {groupItem.status}</p>
                                                            </div>
                                                            <div>
                                                                <p><span className="font-semibold">Contract Type:</span> {groupItem.contract_type}</p>
                                                                <p><span className="font-semibold">Date Signed:</span> {groupItem.date_signed}</p>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4 flex space-x-2">
                                                            <Button variant="outline">View Contract</Button>
                                                            <Button variant="outline">Edit Details</Button>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    );
}