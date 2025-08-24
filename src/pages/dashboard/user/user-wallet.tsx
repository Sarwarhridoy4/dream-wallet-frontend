"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wallet, Plus, Minus, Send, Eye, EyeOff } from "lucide-react"

export function UserWallet() {
  const [showBalance, setShowBalance] = useState(true)
  const [topUpAmount, setTopUpAmount] = useState("")
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [sendAmount, setSendAmount] = useState("")
  const [recipient, setRecipient] = useState("")

  const currentBalance = 1234.56

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Wallet</h1>
        <p className="text-muted-foreground">Manage your wallet balance and transactions</p>
      </div>

      {/* Balance Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wallet className="h-5 w-5" />
              <CardTitle>Current Balance</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setShowBalance(!showBalance)}>
              {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">{showBalance ? `$${currentBalance.toFixed(2)}` : "••••••"}</div>
          <p className="text-sm text-muted-foreground mt-2">Available balance</p>
        </CardContent>
      </Card>

      {/* Wallet Actions */}
      <Tabs defaultValue="topup" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="topup">Top Up</TabsTrigger>
          <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
          <TabsTrigger value="send">Send Money</TabsTrigger>
        </TabsList>

        <TabsContent value="topup" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Add Money</span>
              </CardTitle>
              <CardDescription>Add funds to your wallet from your bank account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="topup-amount">Amount</Label>
                <Input
                  id="topup-amount"
                  type="number"
                  placeholder="0.00"
                  value={topUpAmount}
                  onChange={(e) => setTopUpAmount(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Payment Method</Label>
                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Bank Account ••••1234
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Credit Card ••••5678
                  </Button>
                </div>
              </div>
              <Button className="w-full">Add ${topUpAmount || "0.00"}</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="withdraw" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Minus className="h-5 w-5" />
                <span>Withdraw Money</span>
              </CardTitle>
              <CardDescription>Transfer funds from your wallet to your bank account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="withdraw-amount">Amount</Label>
                <Input
                  id="withdraw-amount"
                  type="number"
                  placeholder="0.00"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Withdraw To</Label>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Bank Account ••••1234 - Checking
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>• Withdrawals typically take 1-3 business days</p>
                <p>• No fees for standard withdrawals</p>
              </div>
              <Button className="w-full">Withdraw ${withdrawAmount || "0.00"}</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="send" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="h-5 w-5" />
                <span>Send Money</span>
              </CardTitle>
              <CardDescription>Send money to friends and family instantly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recipient">Recipient</Label>
                <Input
                  id="recipient"
                  placeholder="Email or phone number"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="send-amount">Amount</Label>
                <Input
                  id="send-amount"
                  type="number"
                  placeholder="0.00"
                  value={sendAmount}
                  onChange={(e) => setSendAmount(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="note">Note (Optional)</Label>
                <Input id="note" placeholder="What's this for?" />
              </div>
              <Button className="w-full">Send ${sendAmount || "0.00"}</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Plus className="h-6 w-6" />
              <span className="text-sm">Add $50</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Plus className="h-6 w-6" />
              <span className="text-sm">Add $100</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Send className="h-6 w-6" />
              <span className="text-sm">Split Bill</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Wallet className="h-6 w-6" />
              <span className="text-sm">Request</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
