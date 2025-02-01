"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AutomationActions from "./AutomationActions"
import IISMonitoring from "./IISMonitoring"
import VirtualizationMonitoring from "./VirtualizationMonitoring"
import MetasysMonitoring from "./MetasysMonitoring"
import CephMonitoring from "./CephMonitoring"

export default function TabbedDashboard() {
  const [activeTab, setActiveTab] = useState("monitoring")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="monitoring">General Monitoring</TabsTrigger>
        <TabsTrigger value="ceph">Ceph Monitoring</TabsTrigger>
        <TabsTrigger value="metasys">Metasys Monitoring</TabsTrigger>
        <TabsTrigger value="automation">Automation & Remote Actions</TabsTrigger>
      </TabsList>
      <TabsContent value="monitoring" className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Windows IIS Monitoring</h2>
            <IISMonitoring />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Virtualization Monitoring</h2>
            <VirtualizationMonitoring />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="metasys">
        <MetasysMonitoring />
      </TabsContent>
      <TabsContent value="automation">
        <AutomationActions />
      </TabsContent>
      <TabsContent value="ceph">
        <h2 className="text-xl font-semibold mb-4">Ceph Cluster Monitoring</h2>
        <CephMonitoring />
      </TabsContent>
    </Tabs>
  )
}

