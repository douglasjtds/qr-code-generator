"use client";

import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from './ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { Button } from './ui/button';

const formSchema = z.object({
  title: z.string().trim().min(1, {
    message: "Type any string or link to transform into a QrCode",
  }),
})

const FormComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="m-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type or Copy anything you want to transform into a QrCode:</FormLabel>
                <FormControl>
                  <Input placeholder="QrCode Text or Link" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Gerar QrCode</Button>
        </form>
      </Form>
    </div>
  );
};

export default FormComponent;
