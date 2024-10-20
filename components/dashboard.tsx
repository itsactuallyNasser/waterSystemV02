'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Wallet, Users, ShoppingCart, Package, DollarSign, TrendingUp, TrendingDown, Calendar } from 'lucide-react'

export function DashboardComponent() {
  const [activeTab, setActiveTab] = useState("inventory")

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600">Water Inventory</h1>
        </div>
        <nav className="mt-6">
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("inventory")}>
            <Package className="mr-2 h-4 w-4" />
            Inventory
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("customers")}>
            <Users className="mr-2 h-4 w-4" />
            Customers
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("sales")}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Sales
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("employees")}>
            <Users className="mr-2 h-4 w-4" />
            Employees
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("expenditures")}>
            <Wallet className="mr-2 h-4 w-4" />
            Expenditures
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <Tabs value={activeTab} className="w-full">
          <TabsList>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="employees">Employees</TabsTrigger>
            <TabsTrigger value="expenditures">Expenditures</TabsTrigger>
          </TabsList>
          <TabsContent value="inventory">
            <InventoryManagement />
          </TabsContent>
          <TabsContent value="customers">
            <CustomerManagement />
          </TabsContent>
          <TabsContent value="sales">
            <SalesManagement />
          </TabsContent>
          <TabsContent value="employees">
            <EmployeeManagement />
          </TabsContent>
          <TabsContent value="expenditures">
            <ExpenditureManagement />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function InventoryManagement() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bottles</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,000</div>
            <p className="text-xs text-muted-foreground">+20% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bottles Sold</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">500</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bottles In Stock</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">500</div>
            <p className="text-xs text-muted-foreground">+25% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Alert</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Products below threshold</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Inventory Management</CardTitle>
          <CardDescription>Track bottle stock and manage purchase records</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="stock">
            <TabsList>
              <TabsTrigger value="stock">Stock Management</TabsTrigger>
              <TabsTrigger value="purchases">Purchase Records</TabsTrigger>
            </TabsList>
            <TabsContent value="stock">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Current Stock</h3>
                  <Button>Add Stock</Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>In Stock</TableHead>
                      <TableHead>Sold Today</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>5L Bottle</TableCell>
                      <TableCell>250</TableCell>
                      <TableCell>50</TableCell>
                      <TableCell className="text-green-500">In Stock</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>10L Bottle</TableCell>
                      <TableCell>100</TableCell>
                      <TableCell>25</TableCell>
                      <TableCell className="text-yellow-500">Low Stock</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>20L Bottle</TableCell>
                      <TableCell>150</TableCell>
                      <TableCell>30</TableCell>
                      <TableCell className="text-green-500">In Stock</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="purchases">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Recent Purchases</h3>
                  <Button>Log Purchase</Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Cost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2023-07-01</TableCell>
                      <TableCell>WaterCo Inc.</TableCell>
                      <TableCell>5L Bottle</TableCell>
                      <TableCell>1000</TableCell>
                      <TableCell>$500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-06-28</TableCell>
                      <TableCell>H2O Supplies</TableCell>
                      <TableCell>10L Bottle</TableCell>
                      <TableCell>500</TableCell>
                      <TableCell>$750</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-06-25</TableCell>
                      <TableCell>Pure Water Ltd.</TableCell>
                      <TableCell>20L Bottle</TableCell>
                      <TableCell>250</TableCell>
                      <TableCell>$625</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

function CustomerManagement() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Customer Management</CardTitle>
          <CardDescription>Manage customer accounts and transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="accounts">
            <TabsList>
              <TabsTrigger value="accounts">Customer Accounts</TabsTrigger>
              <TabsTrigger value="ledger">Customer Ledger</TabsTrigger>
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
            </TabsList>
            <TabsContent value="accounts">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Customer List</h3>
                  <Button>Add Customer</Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>123 Main St, City</TableCell>
                      <TableCell>john@example.com</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>456 Elm St, Town</TableCell>
                      <TableCell>jane@example.com</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="ledger">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Customer Ledger</h3>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">John Doe</SelectItem>
                      <SelectItem value="jane">Jane Smith</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Transaction</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Balance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2023-07-01</TableCell>
                      <TableCell>Purchase</TableCell>
                      <TableCell>$50</TableCell>
                      <TableCell>$50</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-07-05</TableCell>
                      <TableCell>Payment</TableCell>
                      <TableCell>-$30</TableCell>
                      <TableCell>$20</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="invoices">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Customer Invoices</h3>
                  <Button>Generate Invoice</Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice #</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>INV-001</TableCell>
                      <TableCell>John Doe</TableCell>
                      <TableCell>2023-07-01</TableCell>
                      <TableCell>$100</TableCell>
                      <TableCell>Paid</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>INV-002</TableCell>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>2023-07-05</TableCell>
                      <TableCell>$75</TableCell>
                      <TableCell>Pending</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      
      </Card>
    </div>
  )
}

function SalesManagement() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+201 since last hour</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-muted-foreground">+5 since last hour</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Sales Management</CardTitle>
          <CardDescription>View sales reports and manage salesman routes</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="reports">
            <TabsList>
              <TabsTrigger value="reports">Sales Reports</TabsTrigger>
              <TabsTrigger value="routes">Salesman Routes</TabsTrigger>
            </TabsList>
            <TabsContent value="reports">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Sales Report</h3>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="h-[300px] bg-gray-100 flex items-center justify-center">
                  [Sales Chart Placeholder]
                </div>
              </div>
            </TabsContent>
            <TabsContent value="routes">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Salesman Routes</h3>
                  <Button>Assign Route</Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Salesman</TableHead>
                      <TableHead>Area</TableHead>
                      <TableHead>Customers</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>North District</TableCell>
                      <TableCell>15</TableCell>
                      <TableCell>In Progress</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>South District</TableCell>
                      <TableCell>12</TableCell>
                      <TableCell>Completed</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

function EmployeeManagement() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Employee Management</CardTitle>
          <CardDescription>Manage employee accounts and track performance</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="accounts">
            <TabsList>
              <TabsTrigger value="accounts">Employee Accounts</TabsTrigger>
              <TabsTrigger value="performance">Performance Tracking</TabsTrigger>
            </TabsList>
            <TabsContent value="accounts">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Employee List</h3>
                  <Button>Add Employee</Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>Salesman</TableCell>
                      <TableCell>john@example.com</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>Manager</TableCell>
                      <TableCell>jane@example.com</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="performance">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Performance Metrics</h3>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select employee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">John Doe</SelectItem>
                      <SelectItem value="jane">Jane Smith</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Sales Performance</CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">95%</div>
                      <p className="text-xs text-muted-foreground">+5% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">4.8/5</div>
                      <p className="text-xs text-muted-foreground">Based on 50 reviews</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

function ExpenditureManagement() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Expenditure Management</CardTitle>
          <CardDescription>Track and analyze company expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="expenses">
            <TabsList>
              <TabsTrigger value="expenses">Expense Tracking</TabsTrigger>
              <TabsTrigger value="analysis">Expense Analysis</TabsTrigger>
            </TabsList>
            <TabsContent value="expenses">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Recent Expenses</h3>
                  <Button>Log Expense</Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2023-07-01</TableCell>
                      <TableCell>Transportation</TableCell>
                      <TableCell>Fuel for delivery trucks</TableCell>
                      <TableCell>$500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-06-30</TableCell>
                      <TableCell>Salaries</TableCell>
                      <TableCell>Employee salaries for June</TableCell>
                      <TableCell>$10,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="analysis">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Expense Analysis</h3>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="h-[300px] bg-gray-100 flex items-center justify-center">
                  [Expense Analysis Chart Placeholder]
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                      <Wallet className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$25,650</div>
                      <p className="text-xs text-muted-foreground">+12% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Expense vs Revenue</CardTitle>
                      <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">32%</div>
                      <p className="text-xs text-muted-foreground">Expenses as % of Revenue</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}