export type NodeGateway = {
  name: string
  ip: string
  status: "OK" | "WARNING" | "ERROR"
}

export type CephCluster = {
  name: string
  health: "HEALTH_OK" | "HEALTH_WARN" | "HEALTH_ERR"
  nodes: NodeGateway[]
  gateways: NodeGateway[]
  type: "NAS" | "Ceph"
}

export async function getCephClusters(): Promise<CephCluster[]> {
  // In a real application, you would fetch this data from the Ceph API
  return [
    {
      name: "Site A NAS",
      health: "HEALTH_OK",
      nodes: [{ name: "NAS-A-1", ip: "192.168.1.10", status: "OK" }],
      gateways: [{ name: "GW-A-1", ip: "192.168.1.11", status: "OK" }],
      type: "NAS",
    },
    {
      name: "Site B NAS",
      health: "HEALTH_WARN",
      nodes: [{ name: "NAS-B-1", ip: "192.168.2.10", status: "WARNING" }],
      gateways: [{ name: "GW-B-1", ip: "192.168.2.11", status: "OK" }],
      type: "NAS",
    },
    {
      name: "Site C NAS",
      health: "HEALTH_OK",
      nodes: [{ name: "NAS-C-1", ip: "192.168.3.10", status: "OK" }],
      gateways: [{ name: "GW-C-1", ip: "192.168.3.11", status: "OK" }],
      type: "NAS",
    },
    {
      name: "Test Cluster",
      health: "HEALTH_OK",
      nodes: [
        { name: "Test-1", ip: "192.168.4.10", status: "OK" },
        { name: "Test-2", ip: "192.168.4.11", status: "OK" },
        { name: "Test-3", ip: "192.168.4.12", status: "OK" },
      ],
      gateways: [
        { name: "GW-Test-1", ip: "192.168.4.20", status: "OK" },
        { name: "GW-Test-2", ip: "192.168.4.21", status: "OK" },
      ],
      type: "Ceph",
    },
    {
      name: "Production Cluster 1",
      health: "HEALTH_ERR",
      nodes: [
        { name: "Prod1-1", ip: "192.168.5.10", status: "OK" },
        { name: "Prod1-2", ip: "192.168.5.11", status: "ERROR" },
        { name: "Prod1-3", ip: "192.168.5.12", status: "OK" },
        { name: "Prod1-4", ip: "192.168.5.13", status: "OK" },
      ],
      gateways: [
        { name: "GW-Prod1-1", ip: "192.168.5.20", status: "OK" },
        { name: "GW-Prod1-2", ip: "192.168.5.21", status: "WARNING" },
      ],
      type: "Ceph",
    },
    {
      name: "Production Cluster 2",
      health: "HEALTH_OK",
      nodes: [
        { name: "Prod2-1", ip: "192.168.6.10", status: "OK" },
        { name: "Prod2-2", ip: "192.168.6.11", status: "OK" },
        { name: "Prod2-3", ip: "192.168.6.12", status: "OK" },
      ],
      gateways: [
        { name: "GW-Prod2-1", ip: "192.168.6.20", status: "OK" },
        { name: "GW-Prod2-2", ip: "192.168.6.21", status: "OK" },
      ],
      type: "Ceph",
    },
  ]
}

