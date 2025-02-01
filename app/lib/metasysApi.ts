export async function getControllerStatus() {
  // In a real application, you would fetch this data from the Metasys API
  return [
    {
      building: "Main Office",
      controllers: [
        { name: "AHU-1", status: "online" },
        { name: "VAV-101", status: "offline" },
        { name: "CHW-1", status: "warning" },
        { name: "BLR-1", status: "online" },
        { name: "LTG-1", status: "online" },
      ],
    },
    {
      building: "Research Lab",
      controllers: [
        { name: "AHU-2", status: "online" },
        { name: "FCU-201", status: "online" },
        { name: "EXH-1", status: "warning" },
        { name: "CHW-2", status: "online" },
        { name: "LTG-2", status: "offline" },
      ],
    },
    {
      building: "Manufacturing Plant",
      controllers: [
        { name: "AHU-3", status: "online" },
        { name: "PRC-1", status: "online" },
        { name: "CMP-1", status: "online" },
        { name: "BLR-2", status: "warning" },
        { name: "LTG-3", status: "online" },
      ],
    },
    {
      building: "Distribution Center",
      controllers: [
        { name: "AHU-4", status: "offline" },
        { name: "HVAC-1", status: "online" },
        { name: "RFGR-1", status: "online" },
        { name: "DOCK-1", status: "online" },
        { name: "LTG-4", status: "online" },
      ],
    },
    {
      building: "Corporate HQ",
      controllers: [
        { name: "AHU-5", status: "online" },
        { name: "VAV-501", status: "online" },
        { name: "CHW-3", status: "online" },
        { name: "BLR-3", status: "online" },
        { name: "LTG-5", status: "warning" },
      ],
    },
    {
      building: "Data Center",
      controllers: [
        { name: "CRAC-1", status: "online" },
        { name: "UPS-1", status: "online" },
        { name: "GEN-1", status: "online" },
        { name: "FIRE-1", status: "online" },
        { name: "SEC-1", status: "warning" },
      ],
    },
  ]
}

export async function getLockedOutUsers() {
  // In a real application, you would fetch this data from the Metasys API
  return [
    {
      username: "jsmith",
      firstName: "John",
      lastName: "Smith",
      role: "Technician",
      attempts: 3,
      status: "Active",
      lockedDateTime: "",
    },
    {
      username: "agarcia",
      firstName: "Ana",
      lastName: "Garcia",
      role: "Engineer",
      attempts: 5,
      status: "Locked",
      lockedDateTime: "2023-05-15 14:30",
    },
    {
      username: "mwilson",
      firstName: "Mike",
      lastName: "Wilson",
      role: "Manager",
      attempts: 2,
      status: "Active",
      lockedDateTime: "",
    },
    {
      username: "lchen",
      firstName: "Li",
      lastName: "Chen",
      role: "Analyst",
      attempts: 12,
      status: "Locked",
      lockedDateTime: "2023-05-14 09:45",
    },
    {
      username: "kmuller",
      firstName: "Klaus",
      lastName: "Muller",
      role: "Technician",
      attempts: 4,
      status: "Locked",
      lockedDateTime: "2023-05-15 11:20",
    },
    {
      username: "rjones",
      firstName: "Rachel",
      lastName: "Jones",
      role: "Administrator",
      attempts: 15,
      status: "Locked",
      lockedDateTime: "2023-05-13 16:55",
    },
  ]
}

export async function sendTeamsNotification(username: string) {
  // In a real application, you would send a webhook to Microsoft Teams
  console.log(`Sending Teams notification for user: ${username}`)
  // Simulated API call
  return { success: true, message: "Notification sent successfully" }
}

