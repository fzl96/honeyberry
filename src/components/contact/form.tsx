"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormSchema } from "@/lib/validations/contact";
import { sendEmail } from "@/server/actions";
import { toast } from "sonner";

export function ContactForm() {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof ContactFormSchema>) {
    const result = await sendEmail(data);

    if (result?.success) {
      toast("Email sent");
      form.reset();
      return;
    }

    toast("Error sending email");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    className="border-none bg-secondary py-6"
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <div>
                    <Input
                      placeholder="email"
                      {...field}
                      className="border-none bg-secondary py-6"
                      type="email"
                    />
                  </div>
                </FormControl>
              </FormItem>
            );
          }}
        />
        <div className="md:col-span-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      {...field}
                      className="h-40 max-h-80 border-none bg-secondary"
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
        </div>
        <Button
          disabled={form.formState.isSubmitting || !form.formState.isValid}
          type="submit"
          className="py-6 font-semibold md:col-span-2"
        >
          Send
        </Button>
      </form>
    </Form>
  );
}
