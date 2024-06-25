import { BarChart, CheckSquare, Home, SquareStack, Users } from "lucide-react";
import { NavItem } from "./NavItem";

export function MainNavigation(){
    return (
        <nav className="space-y-0.5">
           <NavItem title="Home" icon={Home}/>
           <NavItem title="Dashboard" icon={BarChart}/>
           <NavItem title="Projects" icon={SquareStack}/>
           <NavItem title="Tasks" icon={CheckSquare}/>
           <NavItem title="Users" icon={Users}/>
        </nav>
    )
}