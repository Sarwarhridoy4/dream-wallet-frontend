"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Calendar, Camera, Save, Edit, Star, TrendingUp } from "lucide-react"

// Mock agent data
const mockAgentData = {
  id: "AGT001",
  name: "Sarah Johnson",
  email: "sarah.johnson@example.com",
  phone: "+1 (555) 987-6543",
  address: "456 Business Ave, New York, NY 10002",
  dateJoined: "March 10, 2023",
  accountStatus: "verified",
  agentLevel: "Gold Agent",
  commissionRate: 1.2,
  bio: "Experienced financial agent with 5+ years in customer service and money transfer operations.",
  avatar: null,
  stats: {
    totalCustomers: 127,
    monthlyVolume: 15234,
    totalCommissions: 3456.78,
    rating: 4.8,
    completedTransactions: 1247,
  },
  preferences: {
    emailNotifications: true,
    smsNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    twoFactorAuth: true,
  },
}

export function AgentProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(mockAgentData)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handlePreferenceChange = (preference: string, value: boolean) => {
    setFormData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [preference]: value,
      },
    }))
  }

  const handleSave = () => {
    // In a real app, this would save to the backend
    console.log("Saving agent profile data:", formData)
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Agent Profile</h1>
        <p className="text-muted-foreground">Manage your agent account information and performance</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList>
          <TabsTrigger value="profile">Profile Info</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          {/* Profile Header */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Agent Information</CardTitle>
                <Button
                  variant={isEditing ? "default" : "outline"}
                  onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                >
                  {isEditing ? (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={formData.avatar || undefined} />
                    <AvatarFallback className="text-lg">{formData.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{formData.name}</h3>
                  <p className="text-muted-foreground">{formData.email}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge variant="default" className="bg-yellow-100 text-yellow-800">
                      {formData.agentLevel}
                    </Badge>
                    <Badge variant="outline">Agent ID: {formData.id}</Badge>
                    <Badge variant={formData.accountStatus === "verified" ? "default" : "secondary"}>
                      {formData.accountStatus === "verified" ? "Verified" : "Unverified"}
                    </Badge>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Form Fields */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Business Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  disabled={!isEditing}
                  rows={3}
                />
              </div>

              {/* Agent Info */}
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Joined: {formData.dateJoined}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Commission Rate: {formData.commissionRate}%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Rating: {formData.stats.rating}/5.0</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formData.stats.totalCustomers}</div>
                <p className="text-xs text-muted-foreground">Active customers</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Monthly Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${formData.stats.monthlyVolume.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Commissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">${formData.stats.totalCommissions.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">All-time earnings</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formData.stats.completedTransactions}</div>
                <p className="text-xs text-muted-foreground">Completed</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Agent Level Progress</CardTitle>
              <CardDescription>Your progress towards the next agent level</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Monthly Volume Target</span>
                  <span>${formData.stats.monthlyVolume.toLocaleString()} / $20,000</span>
                </div>
                <Progress value={(formData.stats.monthlyVolume / 20000) * 100} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Customer Rating</span>
                  <span>{formData.stats.rating} / 5.0</span>
                </div>
                <Progress value={(formData.stats.rating / 5) * 100} className="h-2" />
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm font-medium">Next Level: Platinum Agent</p>
                <p className="text-xs text-muted-foreground">
                  Requirements: $20,000 monthly volume, 4.5+ rating, 150+ customers
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security and authentication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch
                    checked={formData.preferences.twoFactorAuth}
                    onCheckedChange={(checked) => handlePreferenceChange("twoFactorAuth", checked)}
                  />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Change Password</Label>
                  <div className="space-y-2">
                    <Input type="password" placeholder="Current password" />
                    <Input type="password" placeholder="New password" />
                    <Input type="password" placeholder="Confirm new password" />
                  </div>
                  <Button>Update Password</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how you want to be notified about agent activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive transaction alerts and updates via email</p>
                </div>
                <Switch
                  checked={formData.preferences.emailNotifications}
                  onCheckedChange={(checked) => handlePreferenceChange("emailNotifications", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>SMS Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive important updates via SMS</p>
                </div>
                <Switch
                  checked={formData.preferences.smsNotifications}
                  onCheckedChange={(checked) => handlePreferenceChange("smsNotifications", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive push notifications in your browser</p>
                </div>
                <Switch
                  checked={formData.preferences.pushNotifications}
                  onCheckedChange={(checked) => handlePreferenceChange("pushNotifications", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Marketing Emails</Label>
                  <p className="text-sm text-muted-foreground">Receive promotional offers and updates</p>
                </div>
                <Switch
                  checked={formData.preferences.marketingEmails}
                  onCheckedChange={(checked) => handlePreferenceChange("marketingEmails", checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
