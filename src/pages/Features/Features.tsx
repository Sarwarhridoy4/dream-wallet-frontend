import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Wallet,
  Shield,
  Users,
  Globe,
  NotepadTextDashedIcon,
} from "lucide-react";

const featureList = [
  {
    icon: Wallet,
    title: "Fast Transactions",
    description:
      "Send and receive money instantly with zero hassle. Lightning-fast processing every time.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Your funds are protected with bank-grade encryption and advanced security protocols.",
  },
  {
    icon: Users,
    title: "User Friendly",
    description:
      "Intuitive interface designed for everyone, from beginners to advanced users.",
  },
  {
    icon: NotepadTextDashedIcon,
    title: "Instant Notifications",
    description:
      "Real-time updates on all transactions, keeping you informed and in control.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Plan to expand globally, enabling seamless cross-border digital payments.",
  },
];

const Features = () => {
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
          Features of <span className='text-rose-500'>Dream Wallet</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='max-w-2xl mx-auto text-lg md:text-xl opacity-90 text-gray-700 dark:text-gray-300'
        >
          Explore the powerful tools and functionalities designed to make your
          digital wallet experience seamless, secure, and enjoyable.
        </motion.p>
      </section>

      {/* Feature Cards Section */}
      <section className='py-16 px-6 md:px-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {featureList.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <Card className='bg-white/30 dark:bg-gray-800/40 backdrop-blur-md shadow-md rounded-2xl hover:scale-105 transition-transform duration-300'>
              <CardContent className='flex flex-col items-center text-center p-6'>
                <feature.icon className='h-10 w-10 text-rose-500 mb-4' />
                <h3 className='text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100'>
                  {feature.title}
                </h3>
                <p className='text-gray-700 dark:text-gray-300'>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className='py-20 px-6 md:px-12 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100'>
            Ready to Experience Dream Wallet?
          </h3>
          <p className='max-w-xl mx-auto mb-8 text-lg opacity-90 text-gray-700 dark:text-gray-300'>
            Sign up now and take control of your finances with our powerful
            features.
          </p>
          <Button size='lg' className=' transition'>
            Get Started
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Features;
