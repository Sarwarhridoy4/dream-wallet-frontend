"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

export function UserStats() {
  return (
    <div className='space-y-6 overflow-hidden'>
      <div>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
        <p className='text-muted-foreground'>
          Welcome to your wallet dashboard. Here's an overview of your account.
        </p>
      </div>

      {/* Stats Cards */}
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Current Balance
            </CardTitle>
            <Wallet className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>$1,234.56</div>
            <p className='text-xs text-muted-foreground'>
              +2.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Spent</CardTitle>
            <ArrowDownRight className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>$892.34</div>
            <p className='text-xs text-muted-foreground'>
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Received
            </CardTitle>
            <ArrowUpRight className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>$2,126.90</div>
            <p className='text-xs text-muted-foreground'>
              +8.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Transactions</CardTitle>
            <TrendingUp className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>47</div>
            <p className='text-xs text-muted-foreground'>+3 from last week</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Your latest transactions and account activity
          </CardDescription>
        </CardHeader>
        <CardContent className='overflow-hidden'>
          <div className='space-y-4'>
            {[
              {
                type: "received",
                amount: "+$125.00",
                from: "Sarah Johnson",
                time: "2 hours ago",
              },
              {
                type: "sent",
                amount: "-$45.99",
                to: "Coffee Shop",
                time: "5 hours ago",
              },
              {
                type: "received",
                amount: "+$200.00",
                from: "Freelance Payment",
                time: "1 day ago",
              },
              {
                type: "sent",
                amount: "-$89.50",
                to: "Grocery Store",
                time: "2 days ago",
              },
            ].map((activity, index) => (
              <div key={index} className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                  <div
                    className={`h-2 w-2 rounded-full ${
                      activity.type === "received"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  />
                  <div>
                    <p className='text-sm font-medium'>
                      {activity.type === "received"
                        ? `From ${activity.from}`
                        : `To ${activity.to}`}
                    </p>
                    <p className='text-xs text-muted-foreground'>
                      {activity.time}
                    </p>
                  </div>
                </div>
                <div
                  className={`text-sm font-medium ${
                    activity.type === "received"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {activity.amount}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
