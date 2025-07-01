import { LogOut } from "lucide-react";
import AppLogoIcon from "./app-logo-icon";
import { router } from "@inertiajs/react";

export default function TopMenu() {
    return (
        <header className="flex h-[10vh] bg-blue-300 text-black p-4 shadow-md items-center">
            <div className="flex justify-between items-center">
                <AppLogoIcon size='sm' />
                <div className='flex space items-center'>
                    <button
                        onClick={() => router.post(route('logout'))}
                        className="flex items-center mr-2 space-x-4 hover:text-gray-300 cursor-pointer"
                    >
                        <LogOut className="mr-1 h-em w-4" />
                        <span className="text-sm">Logout</span>
                    </button>
                    <div>
                        {/* profile */}
                        PROFILE
                    </div>
                </div>
            </div>
        </header>
    )
}
