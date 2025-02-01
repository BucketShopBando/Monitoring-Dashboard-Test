import { getVirtualizationMetrics } from "../lib/virtualizationApi"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default async function VirtualizationMonitoring() {
  const metrics = await getVirtualizationMetrics()

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "running":
        return <CheckCircle className="text-green-500 w-5 h-5" />
      case "stopped":
        return <XCircle className="text-red-500 w-5 h-5" />
      default:
        return <AlertCircle className="text-yellow-500 w-5 h-5" />
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {metrics.map((vm) => (
        <div key={vm.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">{vm.name}</h3>
            {getStatusIcon(vm.status)}
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Status:</span>
              <span className="font-medium">{vm.status}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>CPU Usage:</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${vm.cpuUsage}%` }}></div>
                </div>
                <span className="font-medium">{vm.cpuUsage}%</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span>Memory:</span>
              <span className="font-medium">{vm.memoryUsage} MB</span>
            </div>
            <div className="flex justify-between">
              <span>Disk:</span>
              <span className="font-medium">{vm.diskUsage} GB</span>
            </div>
            <div className="flex justify-between">
              <span>Network:</span>
              <span className="font-medium">{vm.networkPerformance} Mbps</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

