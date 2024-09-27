"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from 'lucide-react'
import Link from 'next/link'
import '../app/globals.css'; // Your global styles

const fileSizes = ['MB', 'GB', 'TB']
const speedUnits = ['Mbps', 'MB/s', 'GB/s']

export default function DownloadCalculator() {
  const [fileSize, setFileSize] = useState('')
  const [fileSizeUnit, setFileSizeUnit] = useState('GB')
  const [speed, setSpeed] = useState('')
  const [speedUnit, setSpeedUnit] = useState('Mbps')
  const [result, setResult] = useState('')
  const [isCalculating, setIsCalculating] = useState(false)

  const handleCalculate = () => {
    setIsCalculating(true)
    setTimeout(() => {
      // Placeholder calculation logic
      const fileSizeInMB = parseFloat(fileSize) * (fileSizeUnit === 'GB' ? 1024 : fileSizeUnit === 'TB' ? 1048576 : 1)
      const speedInMbps = parseFloat(speed) * (speedUnit === 'MB/s' ? 8 : speedUnit === 'GB/s' ? 8192 : 1)
      const timeInSeconds = (fileSizeInMB * 8) / speedInMbps
      
      const hours = Math.floor(timeInSeconds / 3600)
      const minutes = Math.floor((timeInSeconds % 3600) / 60)
      const seconds = Math.floor(timeInSeconds % 60)

      setResult(`${hours}h ${minutes}m ${seconds}s`)
      setIsCalculating(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden relative">
        <CardContent className="p-0">
          <div className="absolute top-4 left-4 z-10">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-6 w-6" />
                <span className="sr-only">Back to tools</span>
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 p-6 space-y-6">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mt-8">Download Time Calculator</h1>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fileSize" className="text-gray-600 dark:text-gray-300">File Size</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="fileSize"
                      type="number"
                      value={fileSize}
                      onChange={(e) => setFileSize(e.target.value)}
                      placeholder="Enter file size"
                      className="w-full"
                    />
                    <Select value={fileSizeUnit} onValueChange={setFileSizeUnit}>
                      <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        {fileSizes.map((unit) => (
                          <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="speed" className="text-gray-600 dark:text-gray-300">Download Speed</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="speed"
                      type="number"
                      value={speed}
                      onChange={(e) => setSpeed(e.target.value)}
                      placeholder="Enter speed"
                      className="w-full"
                    />
                    <Select value={speedUnit} onValueChange={setSpeedUnit}>
                      <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        {speedUnits.map((unit) => (
                          <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="result" className="text-gray-600 dark:text-gray-300">Estimated Download Time</Label>
                <Input
                  id="result"
                  type="text"
                  value={result}
                  readOnly
                  placeholder="Calculation result"
                  className="w-full"
                />
              </div>
            </div>
            <div className="lg:col-span-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 transition-all duration-500" />
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-white">
        
                <Download className="w-24 h-24 mb-4" />
                <h2 className="text-4xl font-bold mb-2">Download Time</h2>
                <p className="text-xl mb-8">Calculator</p>
                <Button
                  onClick={handleCalculate}
                  size="lg"
                  className="bg-white text-gray-800 hover:bg-gray-100"
                  disabled={isCalculating}
                >
                  Calculate
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}