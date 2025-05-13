
import React from 'react';
import { Globe, Search, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/contexts/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const { t } = useTranslation();
  const { user, profile, signOut } = useAuth();

  const getInitials = () => {
    if (profile?.full_name) {
      return profile.full_name
        .split(' ')
        .map((n: string) => n[0])
        .join('')
        .toUpperCase();
    }
    
    if (profile?.username) {
      return profile.username.substring(0, 2).toUpperCase();
    }
    
    return user?.email?.substring(0, 2).toUpperCase() || 'U';
  };

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <Globe className="h-6 w-6 text-eco-green" />
        <h1 className="text-xl font-semibold">{t('appTitle')}</h1>
      </div>
      <div className="flex-1 max-w-md mx-6">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder={t('searchPlaceholder')}
            className="pl-9 w-full bg-gray-50"
          />
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <LanguageSwitcher />
        <Button variant="outline" size="sm">{t('exportReport')}</Button>
        <Button variant="default" size="sm" className="bg-eco-green hover:bg-eco-green-dark text-white">
          {t('addSupplier')}
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src={profile?.avatar_url} alt={profile?.username || user?.email} />
                <AvatarFallback>{getInitials()}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{profile?.full_name || profile?.username}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>{t('profile')}</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>{t('signOut')}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
