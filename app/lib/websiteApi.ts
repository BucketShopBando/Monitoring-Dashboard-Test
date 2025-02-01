export async function getWebsiteStatuses() {
  // In a real application, you would fetch this data from your backend service
  // that checks the status of each website
  return [
    { name: "New York System Monitor Portal", url: "https://nyc.example.com", status: "up" },
    { name: "London System Monitor Portal", url: "https://london.example.com", status: "up" },
    { name: "Tokyo System Monitor Portal", url: "https://tokyo.example.com", status: "warning" },
    { name: "Paris System Monitor Portal", url: "https://paris.example.com", status: "up" },
    { name: "Sydney System Monitor Portal", url: "https://sydney.example.com", status: "down" },
    { name: "Berlin System Monitor Portal", url: "https://berlin.example.com", status: "up" },
    { name: "Toronto System Monitor Portal", url: "https://toronto.example.com", status: "up" },
    { name: "Singapore System Monitor Portal", url: "https://singapore.example.com", status: "warning" },
    { name: "Dubai System Monitor Portal", url: "https://dubai.example.com", status: "up" },
    { name: "São Paulo System Monitor Portal", url: "https://saopaulo.example.com", status: "up" },
    { name: "Mumbai System Monitor Portal", url: "https://mumbai.example.com", status: "down" },
    { name: "Moscow System Monitor Portal", url: "https://moscow.example.com", status: "up" },
    { name: "Los Angeles System Monitor Portal", url: "https://la.example.com", status: "warning" },
    { name: "Cape Town System Monitor Portal", url: "https://capetown.example.com", status: "up" },
  ]
}

