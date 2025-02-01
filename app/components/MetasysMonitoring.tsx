"use client"

import { useState, useEffect } from "react"
import { CheckCircle, XCircle, AlertCircle, RefreshCcw } from "lucide-react"
import { getControllerStatus, getLockedOutUsers, sendTeamsNotification } from "../lib/metasysApi"
import { Button } from "@/components/ui/button"

export default function MetasysMonitoring() {
  const [controllerStatus, setControllerStatus] = useState([])
  const [lockedOutUsers, setLockedOutUsers] = useState<
    Array<{
      username: string
      firstName: string
      lastName: string
      role: string
      attempts: number
      status: "Active" | "Locked"
      lockedDateTime: string
    }>
  >([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    const [statusData, userData] = await Promise.all([getControllerStatus(), getLockedOutUsers()])
    setControllerStatus(statusData)
    setLockedOutUsers(userData)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [getControllerStatus, getLockedOutUsers]) // Added dependencies to useEffect

  const getStatusIcon = (status) => {
    switch (status) {
      case "online":
        return <CheckCircle className="text-green-500 w-4 h-4" />
      case "offline":
        return <XCircle className="text-red-500 w-4 h-4" />
      case "warning":
        return <AlertCircle className="text-yellow-500 w-4 h-4" />
    }
  }

  const handleNotify = async (username) => {
    await sendTeamsNotification(username)
    // In a real application, you might want to update the UI to reflect the sent notification
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <RefreshCcw className="animate-spin h-8 w-8 text-blue-500" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Controller Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {controllerStatus.map((building) => (
            <div key={building.building} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-medium text-lg mb-2">{building.building}</h3>
              <ul className="space-y-2">
                {building.controllers.map((controller) => (
                  <li key={controller.name} className="flex items-center justify-between">
                    <span>{controller.name}</span>
                    {getStatusIcon(controller.status)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Locked Out Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Username
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Attempts
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Locked Date/Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {lockedOutUsers.map((user) => (
                <tr key={user.username} className={user.attempts >= 4 ? "bg-red-100 dark:bg-red-900" : ""}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{`${user.firstName} ${user.lastName}`}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.attempts}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.lockedDateTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button onClick={() => handleNotify(user.username)} size="sm">
                      Notify
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

