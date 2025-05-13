
import React from 'react';
import { Globe, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <Globe className="h-6 w-6 text-eco-green" />
        <h1 className="text-xl font-semibold">EcoSupply Tracker</h1>
      </div>
      <div className="flex-1 max-w-md mx-6">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search suppliers, products, locations..."
            className="pl-9 w-full bg-gray-50"
          />
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Button variant="outline" size="sm">Export Report</Button>
        <Button variant="default" size="sm" className="bg-eco-green hover:bg-eco-green-dark text-white">
          Add Supplier
        </Button>
      </div>
    </header>
  );
};

export default Header;
