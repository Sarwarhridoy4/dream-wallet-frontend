"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, ArrowUpRight, ArrowDownRight } from "lucide-react"

// Mock transaction data
const mockTransactions = [
  {
    id: "TXN001",
    type: "received",
    amount: 125.0,
    description: "Payment from Sarah Johnson",
    date: "2024-01-15",
    time: "14:30",
    status: "completed",
    category: "transfer",
  },
  {
    id: "TXN002",
    type: "sent",
    amount: -45.99,
    description: "Coffee Shop Purchase",
    date: "2024-01-15",
    time: "09:15",
    status: "completed",
    category: "food",
  },
  {
    id: "TXN003",
    type: "received",
    amount: 200.0,
    description: "Freelance Payment - Web Design",
    date: "2024-01-14",
    time: "16:45",
    status: "completed",
    category: "income",
  },
  {
    id: "TXN004",
    type: "sent",
    amount: -89.5,
    description: "Grocery Store",
    date: "2024-01-13",
    time: "18:20",
    status: "completed",
    category: "shopping",
  },
  {
    id: "TXN005",
    type: "sent",
    amount: -25.0,
    description: "Netflix Subscription",
    date: "2024-01-12",
    time: "12:00",
    status: "completed",
    category: "subscription",
  },
  {
    id: "TXN006",
    type: "received",
    amount: 75.0,
    description: "Refund - Online Store",
    date: "2024-01-11",
    time: "10:30",
    status: "pending",
    category: "refund",
  },
  {
    id: "TXN007",
    type: "sent",
    amount: -150.0,
    description: "Utility Bill Payment",
    date: "2024-01-10",
    time: "08:45",
    status: "completed",
    category: "bills",
  },
  {
    id: "TXN008",
    type: "received",
    amount: 300.0,
    description: "Salary Advance",
    date: "2024-01-09",
    time: "09:00",
    status: "completed",
    category: "income",
  },
]

export function UserTransactions() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredTransactions = mockTransactions.filter((transaction) => {
    const matchesSearch =
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || transaction.type === filterType
    const matchesStatus = filterStatus === "all" || transaction.status === filterStatus

    return matchesSearch && matchesType && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800">
            Completed
          </Badge>
        )
      case "pending":
        return <Badge variant="secondary">Pending</Badge>
      case "failed":
        return <Badge variant="destructive">Failed</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getTransactionIcon = (type: string) => {
    return type === "received" ? (
      <ArrowDownRight className="h-4 w-4 text-green-600" />
    ) : (
      <ArrowUpRight className="h-4 w-4 text-red-600" />
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
        <p className="text-muted-foreground">View and manage your transaction history</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,456.78</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Received</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">$700.00</div>
            <p className="text-xs text-muted-foreground">4 transactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Sent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">$310.49</div>
            <p className="text-xs text-muted-foreground">4 transactions</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>All your wallet transactions in one place</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="received">Received</SelectItem>
                <SelectItem value="sent">Sent</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>

          {/* Transactions Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getTransactionIcon(transaction.type)}
                        <span className="font-medium">{transaction.id}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground capitalize">{transaction.category}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{transaction.date}</p>
                        <p className="text-sm text-muted-foreground">{transaction.time}</p>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                    <TableCell className="text-right">
                      <span
                        className={`font-medium ${transaction.type === "received" ? "text-green-600" : "text-red-600"}`}
                      >
                        {transaction.type === "received" ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredTransactions.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No transactions found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
