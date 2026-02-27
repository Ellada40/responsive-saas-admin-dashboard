import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Search,
  Filter,
  Plus,
  MoreVertical,
  TrendingUp,
  Package,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "Premium Plan",
    category: "Subscription",
    price: "$29.99",
    stock: "Unlimited",
    sales: 1234,
    revenue: "$36,987",
    status: "active",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Basic Plan",
    category: "Subscription",
    price: "$9.99",
    stock: "Unlimited",
    sales: 987,
    revenue: "$9,861",
    status: "active",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Enterprise Plan",
    category: "Subscription",
    price: "$99.99",
    stock: "Unlimited",
    sales: 543,
    revenue: "$54,294",
    status: "active",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Add-on: Extra Storage",
    category: "Add-on",
    price: "$4.99",
    stock: "Unlimited",
    sales: 321,
    revenue: "$1,602",
    status: "active",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=200&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Legacy Plan",
    category: "Subscription",
    price: "$19.99",
    stock: "Unlimited",
    sales: 45,
    revenue: "$900",
    status: "inactive",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=200&fit=crop",
  },
];

const stats = [
  { label: "Total Products", value: "12", icon: Package },
  { label: "Active Products", value: "9", icon: TrendingUp },
  { label: "Total Revenue", value: "$103.6K", icon: TrendingUp },
  { label: "Avg. Product Value", value: "$8,633", icon: TrendingUp },
];

export function Products() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Products</h1>
          <p className="text-gray-500 mt-1">
            Manage your product catalog and pricing
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Product
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-semibold text-gray-900 mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Products Grid/Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle>All Products</CardTitle>
            <div className="flex gap-2">
              <div className="relative flex-1 sm:flex-none sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                    Product
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                    Category
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                    Price
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                    Sales
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                    Revenue
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                    Status
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr
                    key={product.id}
                    className={
                      index !== filteredProducts.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <span className="text-sm font-medium text-gray-900">
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {product.category}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-900">
                      {product.price}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {product.sales.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-900">
                      {product.revenue}
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={product.status === "active" ? "default" : "outline"}
                        className={
                          product.status === "active"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : ""
                        }
                      >
                        {product.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {filteredProducts.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-medium text-gray-900 truncate">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {product.category}
                          </p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-500">Price: </span>
                          <span className="font-medium text-gray-900">
                            {product.price}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500">Sales: </span>
                          <span className="text-gray-900">
                            {product.sales.toLocaleString()}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500">Revenue: </span>
                          <span className="font-medium text-gray-900">
                            {product.revenue}
                          </span>
                        </div>
                        <div>
                          <Badge
                            variant={
                              product.status === "active" ? "default" : "outline"
                            }
                            className={
                              product.status === "active"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : ""
                            }
                          >
                            {product.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
