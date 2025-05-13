
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { suppliers } from '@/utils/dummyData';

const SupplyChainMap = () => {
  const [selectedSupplier, setSelectedSupplier] = useState<string | null>(null);
  
  // In a real app, this would use a mapping library like react-leaflet or mapbox
  return (
    <Card className="col-span-2 row-span-2">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Supply Chain Map</CardTitle>
          <Badge variant="outline" className="font-normal">7 Active Suppliers</Badge>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="p-0">
        <div className="p-6 text-center">
          <div className="bg-gray-100 rounded-lg h-[280px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')] bg-cover"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <p className="text-lg font-medium text-slate-800 bg-white/80 px-4 py-2 rounded">Interactive Supply Chain Map</p>
              <p className="text-sm text-slate-600 bg-white/80 px-4 py-1 rounded mt-2">
                Shows 7 suppliers across North America
              </p>
            </div>
            
            {/* This would be replaced with actual map pins in a real implementation */}
            {suppliers.map(supplier => (
              <div 
                key={supplier.id}
                className="absolute h-4 w-4 bg-eco-green rounded-full cursor-pointer"
                style={{
                  left: `${((supplier.coordinates[0] + 125) / 55) * 100}%`, 
                  top: `${((supplier.coordinates[1] - 30) / 25) * 100}%`
                }}
                onClick={() => setSelectedSupplier(supplier.id)}
              >
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
                  {supplier.name}
                </span>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-500">Raw Materials</span>
              <span className="text-xl font-semibold text-eco-green">2 Suppliers</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-500">Manufacturing</span>
              <span className="text-xl font-semibold text-eco-blue">2 Suppliers</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-500">Distribution</span>
              <span className="text-xl font-semibold text-orange-500">3 Suppliers</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplyChainMap;
