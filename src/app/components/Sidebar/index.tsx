import { BarChart, CheckSquare, Cog, Home, LifeBuoy, Search, SquareStack, Users } from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './MainNavigation/NavItem'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2  shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          type="text"
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Buscar"
        />
      </div>

      <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home}/>
          <NavItem title="Dashboard" icon={BarChart}/>
          <NavItem title="Projects" icon={SquareStack}/>
          <NavItem title="Tasks" icon={CheckSquare}/>
          <NavItem title="Users" icon={Users}/>
      </nav>
      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
           <NavItem title="Support" icon={LifeBuoy}/>
           <NavItem title="Settings" icon={Cog}/>
        </nav>
        <div className="flex flex-col gap-4 rounded-large bg-violet-50 px-4 py-5">
          
        </div>
      </div>
    </aside>
  )
}
