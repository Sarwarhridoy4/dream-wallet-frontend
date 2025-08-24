"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, ArrowUpCircle, ArrowDownCircle } from "lucide-react"

// Mock transaction data for agent
const mockAgentTransactions = [
  {
    id: "AGT001",
    type: "cash-in",
    customer: "Carol Davis",
    amount: 500.0,
    commission: 6.0,
    date: "2024-01-15",
    time: "16:45",
    status: "completed",
    method: "cash",
  },
  {
    id: "AGT002",
    type: "cash-in",
    customer: "Alice Johnson",
    amount: 250.0,
    commission: 3.0,
    date: "2024-01-15",
    time: "14:30",
    status: "completed",
    method: "bank-transfer",
  },
  {
    id: "AGT003",
    type: "cash-out",
    customer: "Bob Smith",
    amount: 150.0,
    commission: 1.5,
    date: "2024-01-15",
    time: "09:15",
    status: "completed",
    method: "cash",
  },
  {
    id: "AGT004",
    type: "cash-out",
    customer: "David Wilson",
    amount: 75.0,
    commission: 0.75,
    date: "2024-01-14",
    time: "18:20",
    status: "completed",
    method: "mobile-money",
  },
  {
    id: "AGT005",
    type: "cash-in",
    customer: "Emma Brown",
    amount: 300.0,
    commission: 3.6,
    date: "2024-01-13",
    time: "12:00",
    status: "pending",
    method: "bank-transfer",
  },
  {
    id: "AGT006",
    type: "cash-out",
    customer: "Frank Miller",
    amount: 200.0,
    commission: 2.0,
    date: "2024-01-12",
    time: "10:30",
    status: "completed",
    method: "cash",
  },
  {
    id: "AGT007",
    type: "cash-in",
    customer: "Grace Wilson",
    amount: 450.0,
    commission: 5.4,
    date: "2024-01-11",
    time: "08:45",
    status: "completed",
    method: "mobile-money",
  },
  {
    id: "AGT008",
    type: "cash-out",
    customer: "Henry Davis",
    amount: 125.0,
    commission: 1.25,
    date: "2024-01-10",
    time: "15:20",
    status: "failed",
    method: "bank-transfer",
  },
]

export function AgentTransactions() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterMethod, setFilterMethod] = useState("all")

  const filteredTransactions = mockAgentTransactions.filter((transaction) => {
    const matchesSearch =
      transaction.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || transaction.type === filterType
    const matchesStatus = filterStatus === "all" || transaction.status === filterStatus
    const matchesMethod = filterMethod === "all" || transaction.method === filterMethod

    return matchesSearch && matchesType && matchesStatus && matchesMethod
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
    return type === "cash-in" ? (
      <ArrowUpCircle className="h-4 w-4 text-green-600" />
    ) : (
      <ArrowDownCircle className="h-4 w-4 text-blue-600" />
    )
  }

  const totalCommissions = filteredTransactions
    .filter((t) => t.status === "completed")
    .reduce((sum, t) => sum + t.commission, 0)

  const totalVolume = filteredTransactions.filter((t) => t.status === "completed").reduce((sum, t) => sum + t.amount, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Agent Transactions</h1>
        <p className="text-muted-foreground">View and manage your cash-in and cash-out transaction history</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalVolume.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Completed transactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Commissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${totalCommissions.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Earned from transactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cash-In Count</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {filteredTransactions.filter((t) => t.type === "cash-in" && t.status === "completed").length}
            </div>
            <p className="text-xs text-muted-foreground">Completed deposits</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cash-Out Count</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {filteredTransactions.filter((t) => t.type === "cash-out" && t.status === "completed").length}
            </div>
            <p className="text-xs text-muted-foreground">Completed withdrawals</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>All your agent transactions with detailed commission information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by customer or transaction ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full sm:w-[140px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="cash-in">Cash In</SelectItem>
                <SelectItem value="cash-out">Cash Out</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-[140px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterMethod} onValueChange={setFilterMethod}>
              <SelectTrigger className="w-full sm:w-[140px]">
                <SelectValue placeholder="Method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Methods</SelectItem>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                <SelectItem value="mobile-money">Mobile Money</SelectItem>
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
                  <TableHead>Customer</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Commission</TableHead>
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
                      <p className="font-medium">{transaction.customer}</p>
                    </TableCell>
                    <TableCell>
                      <Badge variant={transaction.type === "cash-in" ? "default" : "secondary"}>
                        {transaction.type === "cash-in" ? "Cash In" : "Cash Out"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="capitalize">{transaction.method.replace("-", " ")}</span>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{transaction.date}</p>
                        <p className="text-sm text-muted-foreground">{transaction.time}</p>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                    <TableCell className="text-right">
                      <span className="font-medium">${transaction.amount.toFixed(2)}</span>
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={`font-medium ${
                          transaction.status === "completed" ? "text-green-600" : "text-muted-foreground"
                        }`}
                      >
                        ${transaction.commission.toFixed(2)}
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
