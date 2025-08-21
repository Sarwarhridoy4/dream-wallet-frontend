import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import {
  Wallet,
  Shield,
  Users,
  ArrowRight,
  Smartphone,
  LineChart,
} from "lucide-react";

const Home = () => {
  return (
    <div className='relative flex flex-col items-center'>
      {/* Background gradient */}
      <div className='absolute inset-0 -z-10 bg-gradient-to-b from-rose-100/40 dark:from-rose-900/30 to-background' />

      {/* Hero Section */}
      <section className='w-full flex flex-col items-center text-center px-6 py-24'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-rose-600 via-pink-500 to-rose-400 dark:from-rose-400 dark:via-pink-300 dark:to-rose-200 bg-clip-text text-transparent'
        >
          Dream Wallet
        </motion.h1>
        <p className='max-w-2xl mt-6 text-lg text-muted-foreground'>
          A{" "}
          <span className='font-semibold text-rose-600 dark:text-rose-400'>
            secure
          </span>
          ,{" "}
          <span className='font-semibold text-rose-600 dark:text-rose-400'>
            fast
          </span>
          , and{" "}
          <span className='font-semibold text-rose-600 dark:text-rose-400'>
            smart
          </span>{" "}
          digital wallet for <strong>Users</strong>, <strong>Agents</strong>,
          and <strong>Admins</strong>.
        </p>
        <div className='mt-8 flex gap-4'>
          <Button
            size='lg'
            className='bg-rose-600 hover:bg-rose-700 text-white'
          >
            Get Started
          </Button>
          <Button size='lg' variant='outline'>
            Learn More
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='px-6 py-20 w-full max-w-6xl'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          About Dream Wallet
        </h2>
        <div className='grid gap-8 md:grid-cols-2 items-center'>
          <div className='relative w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-lg'>
            {/* Image */}
            <motion.img
              src='/image/wallet-illustration.jpg'
              alt='Digital Wallet Illustration'
              className='w-full object-cover'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Overlay with text */}
            <motion.div
              className='absolute inset-0 flex items-center justify-center bg-black/50 text-white'
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='text-center space-y-2'
              >
                <h3 className='text-xl font-bold'>Your Money, Secured</h3>
                <p className='text-sm opacity-90'>
                  Experience seamless transactions with Dream Wallet
                </p>
              </motion.div>
            </motion.div>
          </div>
          <div className='text-center md:text-left'>
            <h3 className='text-xl font-semibold mb-4'>Our Mission</h3>
            <p className='text-muted-foreground mb-4'>
              We’re building the next-generation{" "}
              <strong>fintech platform</strong> where
              <span className='text-rose-600 dark:text-rose-400'>
                {" "}
                security
              </span>
              ,{" "}
              <span className='text-rose-600 dark:text-rose-400'>
                accessibility
              </span>
              , and{" "}
              <span className='text-rose-600 dark:text-rose-400'>
                simplicity
              </span>{" "}
              come first.
            </p>
            <p className='text-muted-foreground'>
              Whether you’re a <strong>User</strong> managing your money, an{" "}
              <strong>Agent</strong> helping the community, or an{" "}
              <strong>Admin</strong> overseeing the system, Dream Wallet
              empowers you with tools to transact and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id='features' className='px-6 py-20 w-full max-w-6xl'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Features at a Glance
        </h2>
        <div className='grid gap-8 md:grid-cols-3'>
          {[
            {
              icon: Smartphone,
              title: "Easy Access",
              desc: "Manage your wallet anytime, anywhere with your phone.",
            },
            {
              icon: Wallet,
              title: "Instant Transfers",
              desc: "Send and receive money instantly across users.",
            },
            {
              icon: Shield,
              title: "Bank-Grade Security",
              desc: "We protect every transaction with advanced encryption.",
            },
            {
              icon: Users,
              title: "Role-Based Dashboards",
              desc: "Separate dashboards for Users, Agents, and Admins.",
            },
            {
              icon: LineChart,
              title: "Smart Insights",
              desc: "Visualize spending, income, and commissions.",
            },
            {
              icon: ArrowRight,
              title: "Seamless Experience",
              desc: "Responsive, fast, and accessible on all devices.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className='backdrop-blur-md bg-white/70 dark:bg-gray-900/40 shadow-md hover:shadow-lg transition rounded-xl'>
                <CardContent className='flex flex-col items-center p-8 text-center'>
                  <item.icon className='h-12 w-12 text-rose-600 mb-4' />
                  <h3 className='text-lg font-semibold'>{item.title}</h3>
                  <p className='text-sm text-muted-foreground mt-2'>
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className='w-full bg-gradient-to-br from-rose-100/40 dark:from-gray-900/40 to-transparent px-6 py-20'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          What People Say
        </h2>
        <div className='grid gap-6 md:grid-cols-3 max-w-6xl mx-auto'>
          {[
            {
              name: "Sarah",
              role: "Freelancer",
              text: "Dream Wallet changed how I get paid globally.",
            },
            {
              name: "David",
              role: "Entrepreneur",
              text: "Fast, reliable, and transparent. Exactly what I need.",
            },
            {
              name: "Aisha",
              role: "Student",
              text: "Sending money home is stress-free and instant.",
            },
          ].map((user, i) => (
            <Card
              key={i}
              className='p-6 backdrop-blur-sm bg-white/70 dark:bg-gray-800/50 shadow-md rounded-xl'
            >
              <CardContent className='flex flex-col items-center text-center'>
                <Avatar className='mb-3 h-12 w-12'>
                  <AvatarImage
                    src={`https://i.pravatar.cc/150?img=${i + 20}`}
                  />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <p className='italic text-muted-foreground mb-3'>
                  "{user.text}"
                </p>
                <h4 className='font-semibold'>{user.name}</h4>
                <p className='text-sm text-muted-foreground'>{user.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id='pricing' className='px-6 py-20 w-full max-w-6xl'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Transparent Pricing
        </h2>
        <div className='grid gap-8 md:grid-cols-3'>
          {[
            {
              title: "Starter",
              price: "$0",
              features: ["Free wallet", "Basic transfers"],
              highlight: false,
            },
            {
              title: "Pro",
              price: "$9/mo",
              features: ["Lower fees", "Priority support"],
              highlight: true,
            },
            {
              title: "Business",
              price: "$29/mo",
              features: ["Team accounts", "Advanced analytics"],
              highlight: false,
            },
          ].map((plan, i) => (
            <Card
              key={i}
              className={`p-8 text-center rounded-2xl shadow-md backdrop-blur-md ${
                plan.highlight
                  ? "border-2 border-rose-600 dark:border-rose-400"
                  : ""
              }`}
            >
              <CardContent>
                <h3 className='text-xl font-semibold mb-2'>{plan.title}</h3>
                <p className='text-4xl font-bold mb-6'>{plan.price}</p>
                <ul className='space-y-2 text-sm text-muted-foreground mb-6'>
                  {plan.features.map((f, idx) => (
                    <li key={idx}>✔ {f}</li>
                  ))}
                </ul>
                <Button
                  size='lg'
                  className={`w-full ${
                    plan.highlight
                      ? "bg-rose-600 hover:bg-rose-700 text-white"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  Choose {plan.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id='contact' className='px-6 py-24 text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-4xl md:text-5xl font-extrabold mb-8'
        >
          Ready to{" "}
          <span className='text-rose-600 dark:text-rose-400'>
            simplify your money
          </span>
          ?
        </motion.h2>
        <Button size='lg' className='bg-rose-600 hover:bg-rose-700 text-white'>
          Create Free Account <ArrowRight className='ml-2 h-5 w-5' />
        </Button>
      </section>
    </div>
  );
};

export default Home;
