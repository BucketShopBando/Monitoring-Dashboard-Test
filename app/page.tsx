import { redirect } from "next/navigation"

export default function Home() {
  redirect("/monitoring-dashboard/dashboard")
}

