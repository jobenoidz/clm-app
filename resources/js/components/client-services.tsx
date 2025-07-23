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

interface ServiceItem {
    id: number;
    sq_num: string;
    group_name: string;
    service_name: string;
    proposal_date: string;
    project_year: number;
    contract_duration: string;
    status: string;
    contract_type: string;
    date_signed: string;
    project_status: string;
    license_count: string;
    availment_status: string;
}

// interface ClientDetailsData {
//     client: Object,
//     availed: Array<Object>,
//     status: Object
// }

export default function ServicesModalDetails({ clientName, services, onServicesClose }) {
    if (!services) return null
    const [expandedRows, setExpandedRows] = useState<number[]>([]);


    const toggleRow = (id: number) => {
        setExpandedRows(prev =>
            prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
        );
    };


    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                <div
                    className="absolute inset-0 z-1 bg-black/20"
                    onClick={onServicesClose}
                />
                <div className="flex flex-col bg-white rounded-2xl w-[60vw] min-h-[50vh] max-h-[100vh] overflow-auto z-2">
                    {/* Group Modal Header */}
                    <div className="p-4 justify-between flex items-center">
                        <span className='text-xl font-bold'>{clientName}</span>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={onServicesClose}
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
                                    <TableHead>Product Group</TableHead>
                                    <TableHead>Service Availed</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Contract Type</TableHead>
                                    <TableHead>Date Signed</TableHead>
                                    <TableHead>Valid Until</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {services.map((groupItem) => (
                                    <>
                                        <TableRow
                                            key={groupItem.id}
                                            className={`hover:bg-sky-200 cursor-pointer relative ${expandedRows.includes(groupItem.id) ? 'bg-sky-100 shadow-inner' : ''
                                                }`}

                                            onClick={() => toggleRow(groupItem.id)}
                                        >
                                            <TableCell className="italic">{groupItem.sq_num}</TableCell>
                                            <TableCell className="font-bold">{groupItem.group_name}</TableCell>
                                            <TableCell className="font-bold">{groupItem.service_name}</TableCell>
                                            <TableCell>{groupItem.status}</TableCell>
                                            <TableCell>{groupItem.contract_type}</TableCell>
                                            <TableCell>{groupItem.date_signed}</TableCell>
                                            <TableCell>{groupItem.date_signed}</TableCell>
                                            <TableCell>
                                                {expandedRows.includes(groupItem.id) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                            </TableCell>
                                        </TableRow>

                                        {expandedRows.includes(groupItem.id) && (
                                            <TableRow className="bg-blue-50">
                                                <TableCell colSpan={7} className="p-0 border-t-2 border-sky-200">
                                                    <div className="p-4 pl-8 relative">
                                                        {/* Left border connector */}
                                                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-sky-600"></div>
                                                        <h4 className="font-bold mb-2">Additional Details</h4>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div>
                                                                <p><span className="font-semibold">Project Year:</span> {groupItem.project_year}</p>
                                                                <p><span className="font-semibold">Proposal Date:</span> {groupItem.proposal_date}</p>
                                                                <p><span className="font-semibold">Date Signed:</span> {groupItem.date_signed}</p>
                                                                <p><span className="font-semibold">Contract Duration:</span> {groupItem.contract_duration}</p>
                                                                <p><span className="font-semibold">Contract Type:</span> {groupItem.contract_type}</p>
                                                            </div>
                                                            <div>
                                                                <p><span className="font-semibold">Project Status:</span> {groupItem.project_status}</p>
                                                                <p><span className="font-semibold">Agreement Status:</span> {groupItem.status}</p>
                                                            </div>
                                                            <div>
                                                                <p><span className="font-semibold">License Count:</span> {groupItem.license_count}</p>
                                                                <p><span className="font-semibold">Availment Status:</span> {groupItem.availment_status}</p>
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