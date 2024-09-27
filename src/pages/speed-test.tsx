"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Wifi, Download, Upload, Activity } from 'lucide-react'
import Link from 'next/link'
import '../app/globals.css'; // Your global styles


export default function SpeedTestView() {
  const [isRunning, setIsRunning] = useState(false)
  const [progress, setProgress] = useState(0)
  const [downloadSpeed, setDownloadSpeed] = useState(0)
  const [uploadSpeed, setUploadSpeed] = useState(0)
  const [ping, setPing] = useState(0)
  const [jitter, setJitter] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            setIsRunning(false)
            clearInterval(interval)
            return 100
          }
          return prevProgress + 1
        })
        
        setDownloadSpeed(Math.random() * 100)
        setUploadSpeed(Math.random() * 50)
        setPing(Math.random() * 20 + 10)
        setJitter(Math.random() * 5)
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const toggleTest = () => {
    setIsRunning(!isRunning)
    if (!isRunning) {
      setProgress(0)
      setDownloadSpeed(0)
      setUploadSpeed(0)
      setPing(0)
      setJitter(0)
    }
  }

  const getSpeedRating = (speed: number) => {
    if (speed < 10) return 'Slow'
    if (speed < 30) return 'Average'
    if (speed < 60) return 'Fast'
    return 'Very Fast'
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

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 space-y-6">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mt-8">Speed Test</h1>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Download className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="font-semibold text-blue-800 dark:text-blue-200">Download</span>
                    </div>
                    <span className="text-sm text-blue-600 dark:text-blue-400">{getSpeedRating(downloadSpeed)}</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-2">{downloadSpeed.toFixed(2)} <span className="text-xl font-normal">Mbps</span></div>
                  <Progress value={downloadSpeed} className="h-2 bg-blue-200 dark:bg-blue-700" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="bg-green-100 dark:bg-green-900 p-4 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Upload className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                      <span className="font-semibold text-green-800 dark:text-green-200">Upload</span>
                    </div>
                    <span className="text-sm text-green-600 dark:text-green-400">{getSpeedRating(uploadSpeed)}</span>
                  </div>
                  <div className="text-3xl font-bold text-green-800 dark:text-green-200 mb-2">{uploadSpeed.toFixed(2)} <span className="text-xl font-normal">Mbps</span></div>
                  <Progress value={uploadSpeed * 2} className="h-2 bg-green-200 dark:bg-green-700"  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                      <span className="font-semibold text-purple-800 dark:text-purple-200">Ping & Jitter</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <div className="text-3xl font-bold text-purple-800 dark:text-purple-200">{ping.toFixed(1)} <span className="text-xl font-normal">ms</span></div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">Ping</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-800 dark:text-purple-200">{jitter.toFixed(1)} <span className="text-xl font-normal">ms</span></div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">Jitter</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 transition-all duration-500" />
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-white">
                <Wifi className="w-20 h-20 mb-6" />
                <h2 className="text-4xl font-bold mb-2">Speed Test</h2>
                <p className="text-xl mb-8 text-blue-100">Measure your connection</p>
                <div className="w-48 h-48 rounded-full shadow-lg mb-8 flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-sm relative">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-blue-300 opacity-25"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="44"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-white transition-all duration-300 ease-in-out"
                      strokeWidth="8"
                      strokeDasharray={276.46}
                      strokeDashoffset={276.46 - (progress / 100) * 276.46}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="44"
                      cx="50"
                      cy="50"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold">{progress}%</div>
                  </div>
                </div>
                <Button
                  onClick={toggleTest}
                  size="lg"
                  className="bg-white text-gray-800 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  {isRunning ? 'Stop Test' : 'Start Test'}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}