
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormValues = z.infer<typeof formSchema>;

interface LoginFormProps {
  onForgotPassword: () => void;
}

const LoginForm = ({ onForgotPassword }: LoginFormProps) => {
  const { signIn } = useAuth();
  const { t } = useTranslation();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      await signIn(values.email, values.password);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('email')}</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('password')}</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="button" 
          variant="link" 
          className="px-0" 
          onClick={onForgotPassword}
        >
          {t('forgotPassword')}
        </Button>

        <Button type="submit" className="w-full bg-eco-green hover:bg-eco-green-dark">
          {t('login')}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
