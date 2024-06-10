'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/Form';
import { Input } from '@/components/Input';
import { FormDataType, FormSchema } from '../_utils/Schema';
import { Button } from '@/components/Button';
import { handleFormSubmission } from '../_actions/action';
import { Textarea } from '@/components/Textarea';
import { useToast } from '@/components/use-toast';
import { ToastAction } from '@/components/toast';
import Spinner from '@/components/Spinner';
import { useState } from 'react';
import CFTurnstile from '@/app/(unAuthenticatedApp)/_components/auth/CFTurnstile';
import { useCfTurnstile } from '@/app/(unAuthenticatedApp)/_components/auth/useCFTurnstile';

const ContactForm = () => {
  const { isVerified: turnstileTokenVeification } = useCfTurnstile();
  const [pending, setPending] = useState(false);
  const { toast } = useToast();
  const form = useForm<FormDataType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      message: '',
      subject: '',
      siteUrl: '',
      confirm__name: '',
    },
  });

  const send = async (data: FormDataType) => {
    if (!turnstileTokenVeification) {
      console.log('turnstileTokenVeification', turnstileTokenVeification);
      return;
    }
    setPending(true);
    const res = await handleFormSubmission(data);

    if (res?.status == 'success') {
      toast({
        title: res?.title,
        description: res?.message,
      });
    } else if (res?.status === 'error') {
      toast({
        title: res?.title,
        description: res?.message.split(',')?.map(
          (msg, index) =>
            msg && (
              <li className='list-disc list-inside' key={index}>
                {msg}
              </li>
            ),
        ),
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
        variant: 'destructive',
      });
    } else if (res?.status === 'honeypot') {
      toast({
        title: res?.title,
        description: res?.message,
        variant: 'destructive',
      });
    }
    setPending(false);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(send)} className='space-y-4'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input autoFocus placeholder='name@mdpabel.com' {...field} />
              </FormControl>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Subject...' {...field} />
              </FormControl>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='siteUrl'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder='https://wordpresssecurities.com'
                  {...field}
                />
              </FormControl>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea rows={4} placeholder='Message...' {...field} />
              </FormControl>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='confirm__name'
          render={({ field }) => (
            <FormItem className='hidden'>
              <FormControl>
                <Input placeholder='Please leave the input field' {...field} />
              </FormControl>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />

        <CFTurnstile />

        <Button
          type='submit'
          className='flex space-x-2 bg-black hover:bg-primary-800 px-5 py-3 rounded-lg sm:w-fit font-medium text-center text-sm text-white focus:ring-4 focus:outline-none focus:ring-primary-300'>
          Send message {pending ? <Spinner /> : null}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
