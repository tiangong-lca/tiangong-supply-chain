
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const formSchema = z.object({
  email: z.string().email(),
});

type FormValues = z.infer<typeof formSchema>;

interface ForgotPasswordFormProps {
  onBack: () => void;
}

const ForgotPasswordForm = ({ onBack }: ForgotPasswordFormProps) => {
  const { resetPassword } = useAuth();
  const { t } = useTranslation();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      await resetPassword(values.email);
      form.reset();
    } catch (error) {
      console.error('Password reset error:', error);
    }
  };

  return (
    <div className="space-y-4">
      <Button 
        type="button" 
        variant="ghost" 
        className="p-0" 
        onClick={onBack}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t('backToLogin')}
      </Button>

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

          <Button type="submit" className="w-full bg-eco-green hover:bg-eco-green-dark">
            {t('sendResetLink')}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
