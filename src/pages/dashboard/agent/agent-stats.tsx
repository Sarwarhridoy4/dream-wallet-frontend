"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Wallet, TrendingUp, Users, DollarSign, ArrowUpCircle, ArrowDownCircle } from "lucide-react"

export function AgentStats() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Agent Dashboard</h1>
        <p className="text-muted-foreground">Monitor your agent performance and earnings overview</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Agent Wallet</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,847.92</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Commissions Earned</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$456.78</div>
            <p className="text-xs text-muted-foreground">+18.3% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">+12 new this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Volume</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,234</div>
            <p className="text-xs text-muted-foreground">+8.7% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Performance</CardTitle>
            <CardDescription>Your performance metrics for this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Transaction Goal</span>
                <span>78/100</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Customer Acquisition</span>
                <span>12/15</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Commission Target</span>
                <span>$456/$500</span>
              </div>
              <Progress value={91} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest agent transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  type: "cash-in",
                  amount: "$250.00",
                  customer: "Alice Johnson",
                  time: "2 hours ago",
                  commission: "$2.50",
                },
                {
                  type: "cash-out",
                  amount: "$150.00",
                  customer: "Bob Smith",
                  time: "4 hours ago",
                  commission: "$1.50",
                },
                {
                  type: "cash-in",
                  amount: "$500.00",
                  customer: "Carol Davis",
                  time: "6 hours ago",
                  commission: "$5.00",
                },
                {
                  type: "cash-out",
                  amount: "$75.00",
                  customer: "David Wilson",
                  time: "1 day ago",
                  commission: "$0.75",
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                      {activity.type === "cash-in" ? (
                        <ArrowUpCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <ArrowDownCircle className="h-4 w-4 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        {activity.type === "cash-in" ? "Cash In" : "Cash Out"} - {activity.customer}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{activity.amount}</div>
                    <div className="text-xs text-green-600">+{activity.commission}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Agent Status */}
      <Card>
        <CardHeader>
          <CardTitle>Agent Status</CardTitle>
          <CardDescription>Your current agent level and benefits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Badge variant="default" className="bg-blue-100 text-blue-800">
                  Gold Agent
                </Badge>
                <span className="text-sm text-muted-foreground">Level 3</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Commission Rate: 1.2% • Next Level: Platinum (Need $20,000 monthly volume)
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">$15,234 / $20,000</p>
              <Progress value={76} className="w-32 h-2 mt-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
