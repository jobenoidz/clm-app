import React, { useEffect, useState } from 'react';

interface SalesRep {
    id: number;
    name: string;
    email: string;
}

interface LeadUpdateExtensionProps {
    isOpen: boolean;
    onClose: () => void;
    onAssign: (userId: number, rep: SalesRep) => void;
    currentAssignedId?: number;
    fromDetails?: boolean;
}

const LeadUpdateExtension: React.FC<LeadUpdateExtensionProps> = ({ isOpen, onClose, onAssign, currentAssignedId, fromDetails }) => {
    const [salesReps, setSalesReps] = useState<SalesRep[]>([]);
    const [selectedId, setSelectedId] = useState<number | null>(currentAssignedId || null);

    useEffect(() => {
        if (isOpen) {
            fetch('/sales-reps')
                .then(res => res.json())
                .then(data => setSalesReps(data.users));
        }
    }, [isOpen]);

    useEffect(() => {
        setSelectedId(currentAssignedId || null);
    }, [currentAssignedId, isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-transparent">
            <div className="bg-[#FFD6CC] p-8 rounded-xl shadow-lg min-w-[700px] max-h-[470px] flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-8">Assign Sales Representative</h2>
                <div className="grid grid-cols-2 gap-6 mb-8 w-full overflow-y-auto" style={{ maxHeight: '320px' }}>
                    {salesReps.map(rep => (
                        <div
                            key={rep.id}
                            className={`bg-white rounded-xl p-6 cursor-pointer border-2 transition-all ${selectedId === rep.id ? 'border-orange-500 shadow-lg' : 'border-transparent'}`}
                            onClick={() => setSelectedId(rep.id)}
                        >
                            <div className="text-xl font-bold mb-1">{rep.name}</div>
                            <div className="text-md text-gray-700 mb-1">{rep.email}</div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-8 w-full mt-auto">
                    <button
                        onClick={onClose}
                        className="bg-white text-black font-semibold px-10 py-3 rounded-xl text-lg shadow border border-gray-300 hover:bg-gray-100"
                    >
                        Discard
                    </button>
                    <button
                        onClick={() => {
                            const rep = salesReps.find(r => r.id === selectedId);
                            if (selectedId && rep) {
                                onAssign(selectedId, rep);
                                // window.location.reload();
                            }
                        }}
                        className="bg-orange-500 text-white font-bold px-10 py-3 rounded-xl text-lg shadow hover:bg-orange-600"
                        disabled={selectedId === null}
                    >
                        Assign
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LeadUpdateExtension;
