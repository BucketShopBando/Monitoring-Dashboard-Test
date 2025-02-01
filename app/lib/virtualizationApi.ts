export async function getVirtualizationMetrics() {
  // In a real application, you would fetch this data from your vSphere or ESXi API
  return [
    { name: "VM1", status: "Running", cpuUsage: 60, memoryUsage: 4096, diskUsage: 100, networkPerformance: 1000 },
    { name: "VM2", status: "Stopped", cpuUsage: 0, memoryUsage: 0, diskUsage: 50, networkPerformance: 0 },
    { name: "VM3", status: "Running", cpuUsage: 75, memoryUsage: 8192, diskUsage: 200, networkPerformance: 1500 },
    { name: "VM4", status: "Running", cpuUsage: 30, memoryUsage: 2048, diskUsage: 80, networkPerformance: 500 },
    { name: "VM5", status: "Warning", cpuUsage: 90, memoryUsage: 16384, diskUsage: 500, networkPerformance: 2000 },
    { name: "VM6", status: "Running", cpuUsage: 45, memoryUsage: 4096, diskUsage: 150, networkPerformance: 1200 },
    { name: "VM7", status: "Stopped", cpuUsage: 0, memoryUsage: 0, diskUsage: 100, networkPerformance: 0 },
    { name: "VM8", status: "Running", cpuUsage: 80, memoryUsage: 8192, diskUsage: 300, networkPerformance: 1800 },
    { name: "VM9", status: "Warning", cpuUsage: 95, memoryUsage: 32768, diskUsage: 1000, networkPerformance: 3000 },
    { name: "VM10", status: "Running", cpuUsage: 50, memoryUsage: 4096, diskUsage: 120, networkPerformance: 900 },
  ]
}

