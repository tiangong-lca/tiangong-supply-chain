
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';

const Auth = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('login');

  // If user is already logged in, redirect to home page
  if (user) {
    navigate('/', { replace: true });
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="mb-4 flex justify-end">
          <LanguageSwitcher />
        </div>
        
        <Card>
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">{t('authentication')}</CardTitle>
            <CardDescription>
              {activeTab === 'login' 
                ? t('loginDescription') 
                : activeTab === 'register' 
                  ? t('registerDescription')
                  : t('resetPasswordDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">{t('login')}</TabsTrigger>
                <TabsTrigger value="register">{t('register')}</TabsTrigger>
              </TabsList>
              <TabsContent value="login" className="mt-4">
                <LoginForm onForgotPassword={() => setActiveTab('forgot-password')} />
              </TabsContent>
              <TabsContent value="register" className="mt-4">
                <RegisterForm />
              </TabsContent>
              <TabsContent value="forgot-password" className="mt-4">
                <ForgotPasswordForm onBack={() => setActiveTab('login')} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
