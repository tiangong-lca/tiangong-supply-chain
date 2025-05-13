
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { emissionsHistory } from '@/utils/dummyData';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useTranslation } from 'react-i18next';

const EmissionsChart = () => {
  const { t } = useTranslation();
  
  // Process data for the chart - group by date
  const chartData = Object.entries(
    emissionsHistory.reduce((acc, { date, value, category }) => {
      if (!acc[date]) {
        acc[date] = { date };
      }
      acc[date][category] = value;
      return acc;
    }, {} as Record<string, any>)
  ).map(([_, data]) => data);

  // Sort data by date
  chartData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-2">
        <CardTitle>{t('emissionsTrend')}</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="pt-6">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorTransportation" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F97316" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorManufacturing" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorFacilities" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3EB75E" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3EB75E" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                tickFormatter={(tick) => {
                  const [year, month] = tick.split('-');
                  return `${month}/${year.slice(2)}`;
                }}
              />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip 
                formatter={(value: number) => [`${value.toLocaleString()} tons CO₂e`]}
                labelFormatter={(label) => {
                  const [year, month] = label.split('-');
                  const date = new Date(parseInt(year), parseInt(month) - 1);
                  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
                }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="transportation" 
                name={t('transportation')}
                stroke="#F97316" 
                fillOpacity={1} 
                fill="url(#colorTransportation)" 
              />
              <Area 
                type="monotone" 
                dataKey="manufacturing" 
                name={t('manufacturing')}
                stroke="#0EA5E9" 
                fillOpacity={1} 
                fill="url(#colorManufacturing)" 
              />
              <Area 
                type="monotone" 
                dataKey="facilities" 
                name={t('facilities')}
                stroke="#3EB75E" 
                fillOpacity={1} 
                fill="url(#colorFacilities)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmissionsChart;
