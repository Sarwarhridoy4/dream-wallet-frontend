import { Link } from "react-router";
import { Wallet, Shield, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className='bg-gray-50 dark:bg-gray-900 border-t mt-12'>
      <div className='max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10'>
        {/* Column 1: Brand */}
        <div>
          <div className='flex items-center gap-2 mb-4'>
            <Wallet className='h-7 w-7 text-rose-600' />
            <span className='text-xl font-bold'>Dream Wallet</span>
          </div>
          <p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed'>
            Send, receive, and manage your money securely anytime, anywhere.
            Trusted by users, agents, and admins across Bangladesh.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
          <ul className='space-y-3 text-sm'>
            <li>
              <Link
                to='/about'
                className='hover:text-rose-600 transition-colors'
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to='/features'
                className='hover:text-rose-600 transition-colors'
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='hover:text-rose-600 transition-colors'
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to='/faq' className='hover:text-rose-600 transition-colors'>
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact / Support */}
        <div>
          <h4 className='text-lg font-semibold mb-4'>Support</h4>
          <ul className='space-y-3 text-sm'>
            <li className='flex items-center gap-2'>
              <Shield className='h-4 w-4 text-rose-600' />
              <span>24/7 Secure Support</span>
            </li>
            <li className='flex items-center gap-2'>
              <Users className='h-4 w-4 text-rose-600' />
              <span>1M+ Active Users</span>
            </li>
            <li>
              <a
                href='mailto:support@dreamwallet.com'
                className='hover:text-rose-600 transition-colors'
              >
                support@dreamwallet.com
              </a>
            </li>
            <li>
              <span className='text-gray-600 dark:text-gray-400'>
                Dhaka, Bangladesh
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className='border-t py-4 text-center text-sm text-gray-500 dark:text-gray-400'>
        © {new Date().getFullYear()} Dream Wallet. All rights reserved.
      </div>
    </footer>
  );
}
