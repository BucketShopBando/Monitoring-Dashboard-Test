import { getIISMetrics } from "../lib/iisApi"

export default async function IISMonitoring() {
  const metrics = await getIISMetrics()

  return (
    <div className="space-y-4 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      {Object.entries(metrics).map(([key, value]) => (
        <div key={key} className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
          <span className="font-medium text-gray-800 dark:text-gray-200">
            {typeof value === "number" && key !== "uptime" ? `${value}${key.includes("Usage") ? "%" : ""}` : value}
          </span>
        </div>
      ))}
    </div>
  )
}

