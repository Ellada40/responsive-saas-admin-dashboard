import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const trafficData = [
  { name: "00:00", visitors: 120, pageViews: 350 },
  { name: "04:00", visitors: 80, pageViews: 200 },
  { name: "08:00", visitors: 300, pageViews: 800 },
  { name: "12:00", visitors: 450, pageViews: 1200 },
  { name: "16:00", visitors: 380, pageViews: 950 },
  { name: "20:00", visitors: 280, pageViews: 650 },
  { name: "24:00", visitors: 150, pageViews: 400 },
];

const deviceData = [
  { name: "Desktop", value: 65, color: "#3b82f6" },
  { name: "Mobile", value: 28, color: "#8b5cf6" },
  { name: "Tablet", value: 7, color: "#ec4899" },
];

const sourceData = [
  { name: "Organic Search", value: 45, color: "#3b82f6" },
  { name: "Direct", value: 25, color: "#8b5cf6" },
  { name: "Social Media", value: 15, color: "#ec4899" },
  { name: "Referral", value: 10, color: "#f59e0b" },
  { name: "Email", value: 5, color: "#10b981" },
];

const topPages = [
  { page: "/dashboard", views: 12543, avgTime: "3:24" },
  { page: "/products", views: 8234, avgTime: "2:15" },
  { page: "/pricing", views: 7123, avgTime: "4:32" },
  { page: "/about", views: 5432, avgTime: "1:45" },
  { page: "/contact", views: 4321, avgTime: "2:08" },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Analytics</h1>
        <p className="text-gray-500 mt-1">
          Track your website performance and user behavior
        </p>
      </div>

      {/* Period Tabs */}
      <Tabs defaultValue="today" className="w-full">
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="month">This Month</TabsTrigger>
          <TabsTrigger value="year">This Year</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-6 mt-6">
          {/* Traffic Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Traffic Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="visitors"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="pageViews"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Device & Source Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Device Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Device Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={deviceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {deviceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-2">
                    {deviceData.map((device) => (
                      <div key={device.name} className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: device.color }}
                        />
                        <span className="text-sm text-gray-600">
                          {device.name}
                        </span>
                        <span className="text-sm font-medium text-gray-900 ml-auto">
                          {device.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Traffic Source */}
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={sourceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {sourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-2">
                    {sourceData.map((source) => (
                      <div key={source.name} className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: source.color }}
                        />
                        <span className="text-sm text-gray-600 whitespace-nowrap">
                          {source.name}
                        </span>
                        <span className="text-sm font-medium text-gray-900 ml-auto">
                          {source.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Pages */}
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                        Page
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                        Views
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                        Avg. Time
                      </th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">
                        Trend
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPages.map((page, index) => (
                      <tr
                        key={page.page}
                        className={index !== topPages.length - 1 ? "border-b border-gray-100" : ""}
                      >
                        <td className="py-3 px-4 text-sm text-gray-900 font-mono">
                          {page.page}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {page.views.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {page.avgTime}
                        </td>
                        <td className="py-3 px-4 text-sm text-right">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            +{Math.floor(Math.random() * 20)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">
                Weekly analytics data would be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="month">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">
                Monthly analytics data would be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="year">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">
                Yearly analytics data would be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
