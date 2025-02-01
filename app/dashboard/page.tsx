import { Suspense } from "react"
import WebsiteStatusList from "../components/WebsiteStatusList"
import TabbedDashboard from "../components/TabbedDashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-200">Monitoring Dashboard</h1>
        <div className="grid gap-6">
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 dark:text-gray-200">Global System Monitor Portals</CardTitle>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading website statuses...</div>}>
                <WebsiteStatusList />
              </Suspense>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardContent>
              <Suspense fallback={<div>Loading dashboard components...</div>}>
                <TabbedDashboard />
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

