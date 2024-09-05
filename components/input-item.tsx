'use client';

import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import QrCodeDialogItem from './qrcode-dialog-item';

let qrCodeValue: string = "";

const formSchema = z.object({
  title: z.string().trim().min(1, {
    message: 'Type any string or link to transform into a QrCode',
  }),
});

const InputItem = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
    },
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    qrCodeValue = values.title;
  }

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div>
                    Type or Copy anything you want to transform into a QrCode:
                  </div>
                </FormLabel>
                <FormControl>
                  <Input placeholder="QrCode Text or Link" {...field} />
                </FormControl>
                <QrCodeDialogItem qrCodeValue={qrCodeValue} />
              </FormItem>
            )}
            />
        </form>
      </Form>
  );
};

export default InputItem;
