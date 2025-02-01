export async function getScripts(): Promise<string[]> {
  // In a real application, you would fetch this from your backend
  return ["restart-service.ps1", "apply-patch.py", "cleanup.sh"]
}

export async function executeScript(script: string): Promise<string> {
  // In a real application, you would send this to your backend for execution
  console.log(`Executing script: ${script}`)
  return `Output of ${script}`
}

