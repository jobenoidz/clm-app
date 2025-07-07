import { Link } from "@inertiajs/react";

const leadFilters = [
    { name: 'All', option: 'all' },
    { name: 'New', option: 'new' },
    { name: 'Ongoing', option: 'ongoing' },
    { name: 'For Renewal', option: 'for_renewal' },
];

export default function ClientFilterMenu() {
    return (
        <div className="flex items-center justify-center">
            <nav className="flex border-primary border-2 rounded-full p-2 justify-between text-center items-center gap-2 w-[40vw]">
                {leadFilters.map((item) => {
                    const href = `/clients-${item.option}`;
                    const isCurrent = route().current('clients', { status: item.option });

                    return (
                        <Link
                            key={item.option}
                            href={href}
                            className={`transition-all text-[13px] select-none rounded-3xl p-1 w-1/4 ${isCurrent
                                ? 'bg-primary text-white font-bold'
                                : 'hover:bg-blue-200'
                                }`}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}