"use client"

import { useState, useEffect } from 'react'

import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ArrowRightLeft, ArrowLeft, Zap, Ruler, Scale, Thermometer, Droplet } from 'lucide-react'
import '../app/globals.css'; // Your global styles
import Link from 'next/link'

const unitTypes = [
  { name: 'Length', units: ['Meters', 'Feet', 'Inches', 'Kilometers', 'Miles'], icon: Ruler, color: 'from-green-400 to-blue-500' },
  { name: 'Weight', units: ['Kilograms', 'Pounds', 'Ounces', 'Grams'], icon: Scale, color: 'from-yellow-400 to-red-500' },
  { name: 'Temperature', units: ['Celsius', 'Fahrenheit', 'Kelvin'], icon: Thermometer, color: 'from-red-400 to-pink-500' },
  { name: 'Volume', units: ['Liters', 'Gallons', 'Milliliters', 'Cubic Meters'], icon: Droplet, color: 'from-blue-400 to-indigo-500' },
  { name: 'Speed', units: ['Kilometers per hour', 'Miles per hour', 'Meters per second'], icon: Zap, color: 'from-purple-400 to-pink-500' },
]

export default function UnitConverter() {
  const [unitType, setUnitType] = useState(unitTypes[0])
  const [fromUnit, setFromUnit] = useState(unitType.units[0])
  const [toUnit, setToUnit] = useState(unitType.units[1])
  const [fromValue, setFromValue] = useState('')
  const [toValue, setToValue] = useState('')
  const [isConverting, setIsConverting] = useState(false)

  useEffect(() => {
    setFromUnit(unitType.units[0])
    setToUnit(unitType.units[1])
  }, [unitType])

  const handleConvert = () => {
    setIsConverting(true)
    setTimeout(() => {
  
      setToValue(fromValue)
      setIsConverting(false)
    }, 1000)
  }

  const handleSwap = () => {
    setFromUnit(toUnit)
    setToUnit(fromUnit)
    setFromValue(toValue)
    setToValue(fromValue)
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
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mt-8">Unit Converter</h1>
              <div>
                <Label htmlFor="unitType" className="text-gray-600 dark:text-gray-300">Unit Type</Label>
                <Select
                  value={unitType.name}
                  onValueChange={(value) => {
                    const newType = unitTypes.find(type => type.name === value)!
                    setUnitType(newType)
                  }}
                >
                  <SelectTrigger id="unitType" className="w-full">
                    <SelectValue placeholder="Select unit type" />
                  </SelectTrigger>
                  <SelectContent>
                    {unitTypes.map((type) => (
                      <SelectItem key={type.name} value={type.name}>
                        <div className="flex items-center">
                          <type.icon className="mr-2 h-4 w-4" />
                          {type.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fromUnit" className="text-gray-600 dark:text-gray-300">From</Label>
                  <Select value={fromUnit} onValueChange={setFromUnit}>
                    <SelectTrigger id="fromUnit" className="w-full">
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      {unitType.units.map((unit) => (
                        <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="fromValue" className="text-gray-600 dark:text-gray-300">Value</Label>
                  <Input
                    id="fromValue"
                    type="number"
                    value={fromValue}
                    onChange={(e) => setFromValue(e.target.value)}
                    placeholder="Enter value"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="toUnit" className="text-gray-600 dark:text-gray-300">To</Label>
                  <Select value={toUnit} onValueChange={setToUnit}>
                    <SelectTrigger id="toUnit" className="w-full">
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      {unitType.units.map((unit) => (
                        <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="toValue" className="text-gray-600 dark:text-gray-300">Result</Label>
                  <Input
                    id="toValue"
                    type="number"
                    value={toValue}
                    readOnly
                    placeholder="Conversion result"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${unitType.color} transition-all duration-500`} />
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-white">
             
                <unitType.icon className="w-24 h-24 mb-4" />
                <h2 className="text-4xl font-bold mb-2">{unitType.name}</h2>
                <p className="text-xl mb-8">Converter</p>
                <div className="flex space-x-4">
                  <Button
                    onClick={handleConvert}
                    size="lg"
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