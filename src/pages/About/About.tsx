import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Sarwar Hossain",
    role: "Founder & CEO",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ayesha Rahman",
    role: "CTO",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Ahmed",
    role: "Lead Designer",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Nusrat Jahan",
    role: "Product Manager",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const About = () => {
  return (
    <div className='w-full text-gray-900 dark:text-gray-100'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-rose-200/40 via-pink-200/30 to-purple-200/40 backdrop-blur-md py-20 px-6 text-center'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-6xl font-extrabold mb-4'
        >
          About{" "}
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-500'>
            Dream Wallet
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='max-w-2xl mx-auto text-lg md:text-xl opacity-90'
        >
          Secure. Fast. Reliable. Empowering people with financial freedom.
        </motion.p>
      </section>

      {/* Our Story */}
      <section className='py-16 px-6 md:px-12 text-center max-w-4xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl md:text-4xl font-bold mb-6'
        >
          Our Story
        </motion.h2>
        <p className='text-gray-700 dark:text-gray-300 text-lg leading-relaxed'>
          Dream Wallet started with a simple vision: to make digital
          transactions accessible and effortless for everyone. From small
          businesses to individuals, our mission is to bring seamless financial
          services to your fingertips with transparency and trust.
        </p>
      </section>

      {/* Mission Section */}
      <section className='py-16 px-6 md:px-12'>
        <div className='max-w-6xl mx-auto text-center'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-3xl md:text-4xl font-bold mb-10'
          >
            Our Mission
          </motion.h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                title: "Financial Inclusion",
                desc: "Secure wallet access for everyone, everywhere.",
                icon: "💳",
              },
              {
                title: "Transparency",
                desc: "Clear fees, fair policies, no surprises.",
                icon: "🔍",
              },
              {
                title: "Innovation",
                desc: "Cutting-edge features for the future of finance.",
                icon: "🚀",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className='p-6 bg-white/30 dark:bg-gray-800/40 backdrop-blur-md shadow-lg rounded-2xl transition-all'
              >
                <div className='text-4xl mb-4'>{item.icon}</div>
                <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                <p className='text-gray-800 dark:text-gray-200'>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className='py-16 px-6 md:px-12'>
        <div className='max-w-6xl mx-auto text-center'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-3xl md:text-4xl font-bold mb-10'
          >
            Meet the Team
          </motion.h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className='flex flex-col items-center text-center p-4 bg-white/20 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl shadow-md'
              >
                <Avatar className='w-24 h-24 mb-4 ring-4 ring-rose-200/40'>
                  <AvatarImage src={member.img} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <h4 className='font-semibold'>{member.name}</h4>
                <p className='text-sm text-gray-700 dark:text-gray-300'>
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 px-6 md:px-12 text-center bg-gradient-to-r from-pink-100/40 via-rose-100/30 to-purple-100/40 backdrop-blur-md rounded-xl'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100'
        >
          Join Us on the Journey
        </motion.h2>
        <p className='max-w-xl mx-auto mb-8 text-lg opacity-90 text-gray-700 dark:text-gray-300'>
          Be part of the digital wallet revolution. Sign up today and experience
          the future of transactions.
        </p>
        <Button
          size='lg'
          className='bg-rose-300/70 text-gray-900 dark:text-gray-900 hover:bg-rose-400/80 backdrop-blur-sm'
        >
          Get Started
        </Button>
      </section>
    </div>
  );
};

export default About;
