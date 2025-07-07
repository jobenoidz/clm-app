import NavLink from './nav-item';

const navItems = [
    { name: 'Dashboard', route: 'dashboard' },
    { name: 'Client Contacts', route: 'clients-all' },
    { name: 'Leads Management', route: 'leads-all' },
    { name: 'Sales Pipeline', route: null },
    { name: 'Tasks & Activities', route: null },
    { name: 'Email & Communication', route: null },
    { name: 'Automation & Workflow', route: null },
    { name: 'Reports & Analytics', route: null },
    { name: 'Customer Support', route: null },
    { name: 'Documents & Files', route: null },
    { name: 'Admin & Settings', route: null },
];

export default function NavSide() {
    return (
        <div className="flex flex-col w-[15%] overflow-y-auto p-4 border-r-2 border-blue-800 fixed-size-text">
            <h1 className="p-4 pb-2 font-bold !text-[24px] select-none">Customer Relationship Management</h1>
            <nav className="mt-0 flex flex-col items-center space-y-1">
                {navItems.map((navItem) => (
                    <NavLink
                        key={navItem.route}
                        href={navItem.route ? '/' + navItem.route : ''}
                        active={navItem.route ? route().current(navItem.route) : false}
                    >
                        {navItem.name}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}