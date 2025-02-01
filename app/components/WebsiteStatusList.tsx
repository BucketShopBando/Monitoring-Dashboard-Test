import { useEffect, useState } from "react"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"
import { getWebsiteStatuses } from "../lib/websiteApi"

type WebsiteStatus = {
  name: string
  url: string
  status: "up" | "down" | "warning"
}

export default function WebsiteStatusList() {
  const [websites, setWebsites] = useState<WebsiteStatus[]>([])

  useEffect(() => {
    const fetchStatuses = async () => {
      const statuses = await getWebsiteStatuses()
      setWebsites(statuses)
    }

    fetchStatuses()
    const intervalId = setInterval(fetchStatuses, 60000)

    return () => clearInterval(intervalId)
  }, [])

  const getStatusIcon = (status: WebsiteStatus["status"]) => {
    switch (status) {
      case "up":
        return <CheckCircle className="text-green-500 w-4 h-4" />
      case "down":
        return <XCircle className="text-red-500 w-4 h-4" />
      case "warning":
        return <AlertCircle className="text-yellow-500 w-4 h-4" />
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {websites.map((website) => (
        <div
          key={website.url}
          className="flex items-center space-x-2 p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
        >
          {getStatusIcon(website.status)}
          <a
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-sm font-medium hover:underline truncate"
            title={website.name}
          >
            {website.name}
          </a>
        </div>
      ))}
    </div>
  )
}

