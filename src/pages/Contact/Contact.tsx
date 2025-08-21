import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    toast.success("Your message has been sent!");
    form.reset();
  };

  return (
    <div className='w-full'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-pink-100/50 via-rose-100/40 to-purple-100/50 backdrop-blur-md py-20 px-6 text-center rounded-xl'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100'
        >
          Contact <span className='text-rose-500'>Us</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='max-w-2xl mx-auto text-lg md:text-xl opacity-90 text-gray-700 dark:text-gray-300'
        >
          Have questions or feedback? We’d love to hear from you.
        </motion.p>
      </section>

      {/* Contact Form */}
      <section className='py-16 px-6 md:px-12 max-w-3xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='flex flex-col gap-6 p-8 bg-white/30 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl shadow-lg'
            >
              {/* Name */}
              <FormField
                control={form.control}
                name='name'
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Your Name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name='email'
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Enter a valid email",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='your@email.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Subject */}
              <FormField
                control={form.control}
                name='subject'
                rules={{ required: "Subject is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder='Subject' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name='message'
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder='Your message...'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type='submit'
                size='lg'
                className=' transition'
              >
                Send Message
              </Button>
            </form>
          </Form>
        </motion.div>
      </section>

      {/* Optional Contact Info */}
      <section className='py-10 px-6 md:px-12 max-w-3xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-gray-700 dark:text-gray-300 space-y-2'
        >
          <p>Email: support@dreamwallet.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Address: 123 Dream Street, Dhaka, Bangladesh</p>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
