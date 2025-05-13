
import React from 'react';
import { ChartBar, Truck, User, Settings, Archive, Earth } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavItem = ({ 
  icon: Icon, 
  label, 
  active = false 
}: { 
  icon: React.ElementType; 
  label: string; 
  active?: boolean;
}) => {
  return (
    <li className={cn(
      "flex items-center px-3 py-2 rounded-lg cursor-pointer mb-1",
      active 
        ? "bg-eco-green text-white" 
        : "text-gray-600 hover:bg-gray-100"
    )}>
      <Icon className="mr-3 h-5 w-5" />
      <span className="font-medium">{label}</span>
    </li>
  );
};

const Sidebar = () => {
  return (
    <aside className="bg-white w-56 border-r border-gray-200 h-[calc(100vh-64px)] p-4">
      <div className="space-y-6">
        <div>
          <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold px-3 mb-2">
            Main
          </h3>
          <ul>
            <NavItem icon={ChartBar} label="Dashboard" active />
            <NavItem icon={Earth} label="Supply Chain Map" />
            <NavItem icon={Archive} label="Inventory" />
            <NavItem icon={Truck} label="Logistics" />
            <NavItem icon={User} label="Suppliers" />
          </ul>
        </div>
        
        <div>
          <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold px-3 mb-2">
            Reports
          </h3>
          <ul>
            <NavItem icon={ChartBar} label="Carbon Footprint" />
            <NavItem icon={ChartBar} label="Sustainability" />
            <NavItem icon={ChartBar} label="Compliance" />
          </ul>
        </div>
        
        <div className="mt-auto">
          <ul>
            <NavItem icon={Settings} label="Settings" />
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
