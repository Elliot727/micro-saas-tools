"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Globe, ArrowRightLeft } from 'lucide-react'
import Link from 'next/link'
import '../app/globals.css'; // Your global styles

const timezones = [
  'America/New_York',
  'America/Los_Angeles',
  'Europe/London',
  'Europe/Paris',
  'Asia/Tokyo',
  'Australia/Sydney',
  'Pacific/Auckland',
  'UTC'
]

export default function TimezoneConverter() {
  const [fromTimezone, setFromTimezone] = useState('UTC')
  const [toTimezone, setToTimezone] = useState('America/New_York')
  const [fromDate, setFromDate] = useState('')
  const [fromTime, setFromTime] = useState('')
  const [convertedTime, setConvertedTime] = useState('')
  const [isConverting, setIsConverting] = useState(false)

  const handleConvert = () => {
    setIsConverting(true)
    setTimeout(() => {
      const dateTime = `${fromDate}T${fromTime}`
      console.log(dateTime)
    //   const utcDate = zonedTimeToUtc(dateTime, fromTimezone)
    //   const convertedDate = utcToZonedTime(utcDate, toTimezone)
    //   setConvertedTime(format(convertedDate, 'yyyy-MM-dd HH:mm:ss zzz'))
      setIsConverting(false)
    }, 1000)
  }

  const handleSwap = () => {
    setFromTimezone(toTimezone)
    setToTimezone(fromTimezone)
    setFromDate('')
    setFromTime('')
    setConvertedTime('')
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden relative">
        <CardContent className="p-0">
          <div className="absolute top-4 left-4 z-10">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/tools">
                <ArrowLeft className="h-6 w-6" />
                <span className="sr-only">Back to tools</span>
              </Link>
            </Button>
          </div>
     
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 p-6 space-y-6">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mt-8">Timezone Converter</h1>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fromTimezone" className="text-gray-600 dark:text-gray-300">From Timezone</Label>
                  <Select value={fromTimezone} onValueChange={setFromTimezone}>
                    <SelectTrigger id="fromTimezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      {timezones.map((tz) => (
                        <SelectItem key={tz} value={tz}>{tz}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="fromDate" className="text-gray-600 dark:text-gray-300">Date</Label>
                  <Input
                    id="fromDate"
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="fromTime" className="text-gray-600 dark:text-gray-300">Time</Label>
                  <Input
                    id="fromTime"
                    type="time"
                    value={fromTime}
                    onChange={(e) => setFromTime(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="toTimezone" className="text-gray-600 dark:text-gray-300">To Timezone</Label>
                  <Select value={toTimezone} onValueChange={setToTimezone}>
                    <SelectTrigger id="toTimezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      {timezones.map((tz) => (
                        <SelectItem key={tz} value={tz}>{tz}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="convertedTime" className="text-gray-600 dark:text-gray-300">Converted Time</Label>
                <Input
                  id="convertedTime"
                  type="text"
                  value={convertedTime}
                  readOnly
                  placeholder="Converted time will appear here"
                  className="w-full"
                />
              </div>
            </div>
            <div className="lg:col-span-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 transition-all duration-500" />
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-white">
           
                <Globe className="w-24 h-24 mb-4" />
                <h2 className="text-4xl font-bold mb-2">Timezone</h2>
                <p className="text-xl mb-8">Converter</p>
                <div className="flex space-x-4">
                  <Button
                    onClick={handleConvert}
                    size="lg"
                    className="bg-white text-gray-800 hover:bg-gray-100"
                    disabled={isConverting}
                  >
                    Convert
                  </Button>
                  <Button
                    onClick={handleSwap}
                    size="lg"
                    variant="outline"
                    className="border-white text-black hover:bg-white/20"
                  >
                                 <ArrowRightLeft className="mr-2 h-4 w-4" />
                    Swap
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}