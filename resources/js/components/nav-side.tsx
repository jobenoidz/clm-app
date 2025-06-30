// resources/js/Components/organisms/NavSide/NavSide.jsx
import { Link, router } from '@inertiajs/react';

export default function NavSide() {

    return (
        <div className="w-64 text-black">
            <div className="p-4">
                <h1 className="text-2xl font-bold">Customer Relationship Management</h1>
            </div>
            <nav className="mt-6 flex flex-col items-center space-y-1">
                <NavLink href="/dashboard" active={route().current('dashboard')}>
                    Dashboard
                </NavLink>
                <NavLink href="/clients" active={route().current('clients')}>
                    Client Contacts
                </NavLink>
                <NavLink href="/leads" active={route().current('leads')}>
                    Leads Management
                </NavLink>
                <NavLink href="/settings" active={route().current('settings')}>
                    Settings
                </NavLink>
            </nav>
        </div>
    );
}

function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={`flex w-[90%] rounded-3xl px-4 py-2  ${active ? 'bg-orange-400 text-white font-bold' : 'hover:bg-orange-300'}`}
        >
            {children}
        </Link>
    );
}