export async function getIISMetrics() {
  // In a real application, you would fetch this data from your IIS server or monitoring service
  return {
    uptime: "99.9%",
    requestsPerSecond: 100,
    failedRequests: 5,
    cpuUsage: 45,
    memoryUsage: 2048,
    sslExpiryDate: "2024-12-31",
  }
}

