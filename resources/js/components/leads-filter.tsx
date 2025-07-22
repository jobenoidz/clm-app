import { Link } from "@inertiajs/react";
import { useState } from "react";

const leadFilters = [
    { name: 'All', option: 'all' },
    { name: 'New', option: 'new' },
    { name: 'Contacted', option: 'contacted' },
    { name: 'For Follow-up', option: 'for_follow-up' },
    { name: 'Interested', option: 'interested' },
    { name: 'Converted', option: 'converted' },
    { name: 'Rejected/Lost', option: 'rejected_or_lost' },
];

export default function LeadFilterMenu() {
    const [isAssignedSelected, setIsAssignedSelected] = useState(false);

    return (
        <>
            <nav className="flex border-orange-400 border-2 rounded-full p-2 justify-between text-center items-center gap-2">
                {leadFilters.map((item) => {
                    const href = `/leads-${item.option}`;
                    const isCurrent = route().current('leads', { status: item.option });

                    return (
                        <Link
                            key={item.option}
                            href={href}
                            className={`transition-all text-[13px] select-none rounded-3xl p-1 w-1/8 ${isCurrent
                                ? 'bg-orange-400 text-white font-bold'
                                : 'hover:bg-orange-300'
                                }`}
                        >
                            {item.name}
                        </Link>
                    );
                })}


            </nav>
            {/* <nav>
                <Link
                    key={'assigned'}
                    href={`/leads-new-assigned`}
                    className={`transition-all text-[13px] select-none rounded-3xl p-1 w-1/8 ${true
                        ? 'bg-orange-400 text-white font-bold'
                        : 'hover:bg-orange-300'
                        }`}
                >
                    Assigned
                </Link>
                <Link
                    key={'t'}
                    href={`/leads-new-assigned`}
                    className={`transition-all text-[13px] select-none rounded-3xl p-1 w-1/8 ${true
                        ? 'bg-orange-400 text-white font-bold'
                        : 'hover:bg-orange-300'
                        }`}
                >
                    Unassigned
                </Link>
            </nav> */}
        </>
    );
}