import { Link, router } from '@inertiajs/react';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { LogOut } from 'lucide-react';
import NavSide from '@/components/nav-side';
import { ReactNode } from 'react';
import AppLogoIcon from '@/components/app-logo-icon';
import TopMenu from '@/components/top-menu';
import TasksMenu from '@/components/tasks-menu';
// import { Sidebar } from '@/components/ui/sidebar';

interface AppLayoutProps {
    children: ReactNode
}

export default function AppLayout({ children, ...props }: AppLayoutProps) {
    return (
        <div className="flex h-screen flex-col bg-gray-100">
            <TopMenu />
            <div className="flex flex-1 overflow-hidden">
                <NavSide />
                <main className="flex-1 overflow-y-scroll p-10">
                    {children}
                </main>
                <TasksMenu />
            </div>
        </div>
    );
}

