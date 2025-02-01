"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { executeScript, getScripts } from "../lib/automationApi"

export default function AutomationActions() {
  const [scripts, setScripts] = useState<string[]>([])
  const [selectedScript, setSelectedScript] = useState("")
  const [customScript, setCustomScript] = useState("")
  const [output, setOutput] = useState("")

  const loadScripts = async () => {
    const fetchedScripts = await getScripts()
    setScripts(fetchedScripts)
  }

  const runScript = async () => {
    const result = await executeScript(selectedScript)
    setOutput(result)
  }

  const runCustomScript = async () => {
    const result = await executeScript(customScript)
    setOutput(result)
  }

  return (
    <div className="space-y-4">
      <Button onClick={loadScripts}>Load Scripts</Button>
      <Select onValueChange={setSelectedScript}>
        <SelectTrigger>
          <SelectValue placeholder="Select a script" />
        </SelectTrigger>
        <SelectContent>
          {scripts.map((script) => (
            <SelectItem key={script} value={script}>
              {script}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={runScript}>Run Selected Script</Button>
      <div>
        <Label htmlFor="custom-script">Custom Script</Label>
        <Input
          id="custom-script"
          value={customScript}
          onChange={(e) => setCustomScript(e.target.value)}
          placeholder="Enter custom script"
        />
      </div>
      <Button onClick={runCustomScript}>Run Custom Script</Button>
      <div>
        <Label>Output</Label>
        <pre className="bg-gray-100 p-2 rounded">{output}</pre>
      </div>
    </div>
  )
}

