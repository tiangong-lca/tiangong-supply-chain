
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { suppliers } from '@/utils/dummyData';

const SupplierScorecard = () => {
  // Sort suppliers by sustainability score in descending order
  const sortedSuppliers = [...suppliers].sort((a, b) => 
    b.sustainabilityScore - a.sustainabilityScore
  );
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Supplier Sustainability Scores</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="px-0 py-4">
        <div className="space-y-5 px-6">
          {sortedSuppliers.slice(0, 5).map((supplier) => (
            <div key={supplier.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{supplier.name}</p>
                  <p className="text-sm text-gray-500">{supplier.location}</p>
                </div>
                <Badge 
                  className={`${
                    supplier.sustainabilityScore >= 85 
                      ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                      : supplier.sustainabilityScore >= 70 
                      ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' 
                      : 'bg-red-100 text-red-800 hover:bg-red-200'
                  }`}
                  variant="outline"
                >
                  {supplier.sustainabilityScore}/100
                </Badge>
              </div>
              <Progress 
                value={supplier.sustainabilityScore} 
                max={100}
                className={`h-2 ${
                  supplier.sustainabilityScore >= 85 
                    ? 'bg-gray-100 [&>div]:bg-green-500' 
                    : supplier.sustainabilityScore >= 70 
                    ? 'bg-gray-100 [&>div]:bg-yellow-500' 
                    : 'bg-gray-100 [&>div]:bg-red-500'
                }`}
              />
              <div className="flex flex-wrap gap-2 mt-1">
                {supplier.certifications.map((cert, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplierScorecard;
