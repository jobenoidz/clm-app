import NavSide from '@/components/nav-side';
import { ReactNode } from 'react';
import TopMenu from '@/components/top-menu';
import TasksMenu from '@/components/tasks-menu';
// import { Sidebar } from '@/components/ui/sidebar';

interface AppLayoutProps {
    children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
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

