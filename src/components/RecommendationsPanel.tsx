
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { recommendations } from '@/utils/dummyData';
import { useTranslation } from 'react-i18next';

const RecommendationsPanel = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>{t('emissionReductionRecommendations')}</CardTitle>
          <Badge variant="outline" className="text-eco-green-dark bg-eco-green-light/30">5 {t('actions')}</Badge>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="p-0">
        <ul className="divide-y divide-gray-100">
          {recommendations.map((rec) => (
            <li key={rec.id} className="px-6 py-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{rec.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{rec.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <Badge 
                      variant="outline"
                      className={`
                        ${rec.impact === 'high' 
                          ? 'bg-green-50 text-green-700 border-green-200'
                          : rec.impact === 'medium'
                          ? 'bg-yellow-50 text-yellow-700 border-yellow-200' 
                          : 'bg-blue-50 text-blue-700 border-blue-200'
                        }
                      `}
                    >
                      {t(rec.impact === 'high' ? 'highImpact' : rec.impact === 'medium' ? 'mediumImpact' : 'lowImpact')}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {t('timeline')}: {rec.timeline}
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-blue-600">
                  {t('details')}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecommendationsPanel;
