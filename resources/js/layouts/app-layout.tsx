import { Link, router } from '@inertiajs/react';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { LogOut } from 'lucide-react';
import NavSide from '@/components/nav-side';
import { ReactNode } from 'react';
import AppLogoIcon from '@/components/app-logo-icon';
// import { Sidebar } from '@/components/ui/sidebar';

interface AppLayoutProps {
    children: ReactNode
}



export default function AppLayout({ children, ...props }: AppLayoutProps) {
    return (
        <div className="flex h-screen flex-col bg-gray-100">
            {/* Top Title Bar - spans full width */}
            <header className="bg-blue-300 text-white p-4 shadow-md">
                <div className="flex items-center justify-between">
                    <AppLogoIcon size='sm' />
                    <div className='flex space'>
                        <button
                            onClick={() => router.post(route('logout'))}
                            className="flex items-center mr-2 space-x-4 hover:text-gray-300 cursor-pointer"
                        >
                            <LogOut className="mr-1 h-4 w-4" />
                            <span className="text-sm">Logout</span>
                            {/* If you have a profile section that shouldn't be clickable, keep it outside */}
                        </button>
                        <div>
                            {/* profile */}
                            TEST
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Area (Sidebar + Page Content) */}
            <div className="flex flex-1 overflow-hidden">
                {/* Side Navigation */}
                <div className="w-64 text-black overflow-y-auto">
                    <NavSide />
                </div>
                <div className='ml-1 mr-1 border-r-4 border-blue-700' />
                {/* Page Content */}
                <main className="flex-1 overflow-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}

