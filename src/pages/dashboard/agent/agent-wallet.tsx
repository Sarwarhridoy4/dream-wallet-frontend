"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wallet, Eye, EyeOff, Download, TrendingUp, DollarSign } from "lucide-react"

export function AgentWallet() {
  const [showBalance, setShowBalance] = useState(true)

  const currentBalance = 2847.92
  const pendingCommissions = 125.5
  const totalEarned = 3456.78

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Agent Wallet</h1>
        <p className="text-muted-foreground">Manage your agent wallet and commission earnings</p>
      </div>

      {/* Balance Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Wallet className="h-5 w-5" />
                <CardTitle>Available Balance</CardTitle>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setShowBalance(!showBalance)}>
                {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{showBalance ? `$${currentBalance.toFixed(2)}` : "••••••"}</div>
            <p className="text-sm text-muted-foreground mt-2">Ready for withdrawal</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Commissions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {showBalance ? `$${pendingCommissions.toFixed(2)}` : "••••••"}
            </div>
            <p className="text-xs text-muted-foreground">Processing in 2-3 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {showBalance ? `$${totalEarned.toFixed(2)}` : "••••••"}
            </div>
            <p className="text-xs text-muted-foreground">All-time earnings</p>
          </CardContent>
        </Card>
      </div>

      {/* Wallet Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Wallet Actions</CardTitle>
          <CardDescription>Manage your agent wallet funds</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <Button className="h-20 flex-col space-y-2">
              <Download className="h-6 w-6" />
              <span>Withdraw Funds</span>
              <span className="text-xs opacity-75">Transfer to bank account</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <TrendingUp className="h-6 w-6" />
              <span>View Statement</span>
              <span className="text-xs opacity-75">Download transaction history</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Commission Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Commission Breakdown</CardTitle>
          <CardDescription>Your earnings breakdown for this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Cash-In Transactions</p>
                <p className="text-sm text-muted-foreground">47 transactions • 1.2% commission rate</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$284.50</p>
                <Badge variant="secondary">62% of total</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Cash-Out Transactions</p>
                <p className="text-sm text-muted-foreground">31 transactions • 1.0% commission rate</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$172.28</p>
                <Badge variant="secondary">38% of total</Badge>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center justify-between">
              <p className="font-medium">Total This Month</p>
              <p className="text-xl font-bold">$456.78</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Wallet Activity</CardTitle>
          <CardDescription>Your latest wallet transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                type: "commission",
                amount: "+$5.00",
                description: "Cash-In Commission - Carol Davis",
                time: "6 hours ago",
              },
              { type: "withdrawal", amount: "-$500.00", description: "Bank Transfer", time: "2 days ago" },
              {
                type: "commission",
                amount: "+$2.50",
                description: "Cash-In Commission - Alice Johnson",
                time: "2 days ago",
              },
              {
                type: "commission",
                amount: "+$1.50",
                description: "Cash-Out Commission - Bob Smith",
                time: "3 days ago",
              },
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      transaction.type === "commission" ? "bg-green-500" : "bg-blue-500"
                    }`}
                  />
                  <div>
                    <p className="text-sm font-medium">{transaction.description}</p>
                    <p className="text-xs text-muted-foreground">{transaction.time}</p>
                  </div>
                </div>
                <div
                  className={`text-sm font-medium ${
                    transaction.type === "commission" ? "text-green-600" : "text-blue-600"
                  }`}
                >
                  {transaction.amount}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
