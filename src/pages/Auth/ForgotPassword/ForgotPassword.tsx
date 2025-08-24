import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router";

const forgotSchema = z.object({
  email: z.string().email("Enter a valid email"),
});

type ForgotFormData = z.infer<typeof forgotSchema>;

const ForgotPassword = () => {
  const navigation = useNavigate();
  const form = useForm<ForgotFormData>({
    resolver: zodResolver(forgotSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: ForgotFormData) => {
    console.log("Forgot Password Data:", data);

    try {
      // Simulate API call
      await new Promise((res) => setTimeout(res, 1500));
      toast.success("Email Sent Successfully!");
      navigation("/reset-password");
    } catch (err) {
      console.log(err);
      toast.error("Failed to send reset email");
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen p-4'>
      <div className='w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 space-y-6'>
        <h2 className='text-2xl font-bold text-center text-gray-800 dark:text-gray-200'>
          Forgot Password
        </h2>
        <p className='text-sm text-gray-600 dark:text-gray-400 text-center'>
          Enter your email to receive a password reset link.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Mail className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
                      <Input
                        {...field}
                        type='email'
                        placeholder='you@example.com'
                        className='pl-10'
                        autoComplete='email'
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type='submit'
              className='w-full'
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Sending..." : "Send Reset Link"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
