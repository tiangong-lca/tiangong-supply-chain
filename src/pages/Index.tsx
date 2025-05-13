
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import SupplyChainMap from '@/components/SupplyChainMap';
import CarbonMetrics from '@/components/CarbonMetrics';
import SupplierScorecard from '@/components/SupplierScorecard';
import RecommendationsPanel from '@/components/RecommendationsPanel';
import EmissionsChart from '@/components/EmissionsChart';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">{t('dashboardTitle')}</h1>
            <p className="text-gray-600 mt-1">
              {t('dashboardDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {/* Top row */}
            <SupplyChainMap />
            <div className="space-y-6">
              <CarbonMetrics />
              <SupplierScorecard />
            </div>
            
            {/* Bottom row */}
            <EmissionsChart />
            <RecommendationsPanel />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
