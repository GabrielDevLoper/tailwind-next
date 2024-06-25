import { ChevronDown, Home } from "lucide-react";

export function MainNavigation(){
    return (
        <nav className="space-y-0.5">
            <a href="" className="flex items-center gap-3 rounded">
                <Home className="h-5 w-5 text-zinc-500"></Home>
                <span className="font-medium text-zinc-500">Home</span>
                <ChevronDown className="ml-auto h-5 w-5"></ChevronDown>
            </a>
        </nav>
    )
}