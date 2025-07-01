import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

interface NavLinkProps {
    href: string;
    active: boolean;
    children: ReactNode;
}

export default function NavLink({ href, active, children, ...props }: NavLinkProps) {
    return (
        <Link
            href={href}
            className={`!text-[16px] select-none fixed-size-text flex w-[100%] rounded-3xl px-4 py-1 ${active ? 'bg-orange-400 text-white font-bold' : 'hover:bg-orange-300'
                }`}
        >
            {children}
        </Link>
    );
}