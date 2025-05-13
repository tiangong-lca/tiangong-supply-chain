
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { totalCarbonFootprint, categoryColors } from '@/utils/dummyData';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CarbonMetricCard = ({ 
  title, 
  value, 
  unit, 
  change 
}: { 
  title: string; 
  value: number; 
  unit: string; 
  change?: number; 
}) => {
  const displayChange = change ? (
    <div className="flex items-center text-sm">
      <ArrowDown className={`h-4 w-4 ${change < 0 ? 'text-green-500 rotate-0' : 'text-red-500 rotate-180'}`} />
      <span className={change < 0 ? 'text-green-500' : 'text-red-500'}>
        {Math.abs(change).toFixed(1)}%
      </span>
    </div>
  ) : null;

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
      <div className="flex items-end justify-between mt-2">
        <div className="flex items-baseline">
          <span className="text-2xl font-bold mr-1">{value.toLocaleString()}</span>
          <span className="text-sm text-gray-500">{unit}</span>
        </div>
        {displayChange}
      </div>
    </div>
  );
};

const CarbonMetrics = () => {
  const { t } = useTranslation();
  
  // In a real app, this would be a real chart using Recharts
  const pieChartData = Object.entries(totalCarbonFootprint.byCategory);
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>{t('carbonFootprintOverview')}</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="pt-6">
        <div className="grid gap-4 mb-6">
          <CarbonMetricCard
            title={t('totalCarbonEmissions')}
            value={totalCarbonFootprint.total}
            unit="tons CO₂e"
            change={totalCarbonFootprint.yearOverYearChange}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <CarbonMetricCard
              title={t('transportEmissions')}
              value={totalCarbonFootprint.byCategory.Transportation}
              unit="tons CO₂e"
            />
            <CarbonMetricCard
              title={t('manufacturing')}
              value={totalCarbonFootprint.byCategory.Manufacturing}
              unit="tons CO₂e"
            />
          </div>
        </div>
        
        <h3 className="font-medium mb-3">{t('emissionsByCategory')}</h3>
        <div className="flex items-center">
          <div className="relative w-24 h-24">
            {/* Simple pie chart visualization */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {pieChartData.reduce((acc, [category, value], i, arr) => {
                const total = Object.values(totalCarbonFootprint.byCategory).reduce((a, b) => a + b, 0);
                const startAngle = acc.angleSum;
                const angle = (value / total) * 360;
                const endAngle = startAngle + angle;
                const startRad = (startAngle - 90) * Math.PI / 180;
                const endRad = (endAngle - 90) * Math.PI / 180;
                const x1 = 50 + 40 * Math.cos(startRad);
                const y1 = 50 + 40 * Math.sin(startRad);
                const x2 = 50 + 40 * Math.cos(endRad);
                const y2 = 50 + 40 * Math.sin(endRad);
                const largeArcFlag = angle > 180 ? 1 : 0;
                
                const pathData = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                
                acc.paths.push(
                  <path
                    key={category}
                    d={pathData}
                    fill={categoryColors[category] || '#ccc'}
                  />
                );
                
                acc.angleSum = endAngle;
                return acc;
              }, { paths: [] as React.ReactNode[], angleSum: 0 }).paths}
            </svg>
          </div>
          
          <div className="ml-6 flex-1">
            <ul className="space-y-2">
              {Object.entries(totalCarbonFootprint.byCategory).map(([category, value]) => (
                <li key={category} className="flex items-center text-sm">
                  <span 
                    className="h-3 w-3 rounded-full mr-2"
                    style={{ backgroundColor: categoryColors[category] || '#ccc' }}
                  ></span>
                  <span className="flex-1">{t(category.toLowerCase())}</span>
                  <span className="font-medium">{Math.round((value / totalCarbonFootprint.total) * 100)}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonMetrics;
