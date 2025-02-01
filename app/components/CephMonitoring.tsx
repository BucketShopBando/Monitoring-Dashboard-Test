"use client"

import { useEffect, useState } from "react"
import { getCephClusters, type CephCluster, type NodeGateway } from "../lib/cephApi"
import { CheckCircle, XCircle, AlertCircle, RefreshCcw, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CephMonitoring() {
  const [clusters, setClusters] = useState<CephCluster[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedClusters, setExpandedClusters] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const fetchClusters = async () => {
      setLoading(true)
      const data = await getCephClusters()
      setClusters(data)
      setLoading(false)
    }

    fetchClusters()
    const intervalId = setInterval(fetchClusters, 60000) // Refresh every minute

    return () => clearInterval(intervalId)
  }, [])

  const getHealthIcon = (health: CephCluster["health"]) => {
    switch (health) {
      case "HEALTH_OK":
        return <CheckCircle className="text-green-500 w-5 h-5" />
      case "HEALTH_WARN":
        return <AlertCircle className="text-yellow-500 w-5 h-5" />
      case "HEALTH_ERR":
        return <XCircle className="text-red-500 w-5 h-5" />
    }
  }

  const getStatusIcon = (status: NodeGateway["status"]) => {
    switch (status) {
      case "OK":
        return <CheckCircle className="text-green-500 w-4 h-4" />
      case "WARNING":
        return <AlertCircle className="text-yellow-500 w-4 h-4" />
      case "ERROR":
        return <XCircle className="text-red-500 w-4 h-4" />
    }
  }

  const toggleClusterExpansion = (clusterName: string) => {
    setExpandedClusters((prev) => ({
      ...prev,
      [clusterName]: !prev[clusterName],
    }))
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <RefreshCcw className="animate-spin h-8 w-8 text-blue-500" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {clusters.map((cluster) => (
        <div key={cluster.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-lg">{cluster.name}</h3>
            {getHealthIcon(cluster.health)}
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Type:</span>
              <span className="font-medium">{cluster.type}</span>
            </div>
            <div className="flex justify-between">
              <span>Nodes:</span>
              <span className="font-medium">{cluster.nodes.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Gateways:</span>
              <span className="font-medium">{cluster.gateways.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Health:</span>
              <span
                className={`font-medium ${
                  cluster.health === "HEALTH_OK"
                    ? "text-green-500"
                    : cluster.health === "HEALTH_WARN"
                      ? "text-yellow-500"
                      : "text-red-500"
                }`}
              >
                {cluster.health}
              </span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="mt-2 w-full flex justify-between items-center"
            onClick={() => toggleClusterExpansion(cluster.name)}
          >
            {expandedClusters[cluster.name] ? "Hide Details" : "Show Details"}
            {expandedClusters[cluster.name] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
          {expandedClusters[cluster.name] && (
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-medium mb-2">Nodes</h4>
                <ul className="space-y-2">
                  {cluster.nodes.map((node) => (
                    <li key={node.name} className="flex items-center justify-between">
                      <span>{node.name}</span>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(node.status)}
                        <a
                          href={`http://${node.ip}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {node.ip}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Gateways</h4>
                <ul className="space-y-2">
                  {cluster.gateways.map((gateway) => (
                    <li key={gateway.name} className="flex items-center justify-between">
                      <span>{gateway.name}</span>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(gateway.status)}
                        <a
                          href={`http://${gateway.ip}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {gateway.ip}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

