import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router";

const faqList = [
  {
    question: "How do I create an account?",
    answer:
      "Click on the 'Sign Up' button on the top navigation and fill out your details. Verification is instant!",
  },
  {
    question: "Is my money safe?",
    answer:
      "Absolutely! Dream Wallet uses bank-grade security with encryption and two-factor authentication.",
  },
  {
    question: "Can I send money internationally?",
    answer:
      "Currently, Dream Wallet supports domestic transactions. International support is coming soon.",
  },
  {
    question: "What are the transaction fees?",
    answer:
      "Transactions within the wallet are free. Sending money to a bank account may incur minimal fees depending on your plan.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Go to the login page and click 'Forgot Password'. Follow the instructions to reset your password securely.",
  },
];

const FaqPage = () => {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-pink-50/50 via-rose-50/40 to-purple-50/50 backdrop-blur-md py-20 px-6 text-center rounded-xl'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100'
        >
          Frequently Asked <span className='text-rose-500'>Questions</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='max-w-2xl mx-auto text-lg md:text-xl opacity-90 text-gray-700 dark:text-gray-300'
        >
          Have questions? Find quick answers to common queries about Dream
          Wallet.
        </motion.p>
      </section>

      {/* FAQ Accordion Section */}
      <section className='py-16 px-6 md:px-12 max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='space-y-4'
        >
          {faqList.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className='bg-white/30 dark:bg-gray-800/40 backdrop-blur-md shadow-md rounded-2xl'>
                <CardContent>
                  <Accordion type='single' collapsible>
                    <AccordionItem value={`item-${i}`}>
                      <AccordionTrigger className='text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100'>
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className='text-gray-700 dark:text-gray-300 mt-2'>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-6 md:px-12 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100'>
            Still Have Questions?
          </h3>
          <p className='max-w-xl mx-auto mb-8 text-lg opacity-90 text-gray-700 dark:text-gray-300'>
            Contact our support team and get help instantly.
          </p>
          <Link to='/contact'>
            <Button size='lg' className='transition'>
              Contact Support
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default FaqPage;
