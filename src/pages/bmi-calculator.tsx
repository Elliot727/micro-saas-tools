"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Activity} from 'lucide-react'
import Link from 'next/link'
import '../app/globals.css'; // Your global styles
const heightUnits = ['cm', 'inches']
const weightUnits = ['kg', 'lbs']

export default function BMICalculator() {
  const [height, setHeight] = useState('')
  const [heightUnit, setHeightUnit] = useState('cm')
  const [weight, setWeight] = useState('')
  const [weightUnit, setWeightUnit] = useState('kg')
  const [bmi, setBMI] = useState('')
  const [bmiCategory, setBMICategory] = useState('')
  const [isCalculating, setIsCalculating] = useState(false)

  const handleCalculate = () => {
    setIsCalculating(true)
    setTimeout(() => {
      const heightInMeters = parseFloat(height) / (heightUnit === 'cm' ? 100 : 39.37)
      const weightInKg = parseFloat(weight) * (weightUnit === 'kg' ? 1 : 0.453592)
      
      const bmiValue = weightInKg / (heightInMeters * heightInMeters)
      let category = ''

      if (bmiValue < 18.5) category = 'Underweight'
      else if (bmiValue < 25) category = 'Normal weight'
      else if (bmiValue < 30) category = 'Overweight'
      else category = 'Obese'

      setBMI(bmiValue.toFixed(1))
      setBMICategory(category)
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
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mt-8">BMI Calculator</h1>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="height" className="text-gray-600 dark:text-gray-300">Height</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="Enter height"
                      className="w-full"
                    />
                    <Select value={heightUnit} onValueChange={setHeightUnit}>
                      <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        {heightUnits.map((unit) => (
                          <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="weight" className="text-gray-600 dark:text-gray-300">Weight</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="weight"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="Enter weight"
                      className="w-full"
                    />
                    <Select value={weightUnit} onValueChange={setWeightUnit}>
                      <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        {weightUnits.map((unit) => (
                          <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bmi" className="text-gray-600 dark:text-gray-300">Your BMI</Label>
                <Input
                  id="bmi"
                  type="text"
                  value={bmi}
                  readOnly
                  placeholder="BMI result"
                  className="w-full"
                />
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Category: <span className="text-blue-600 dark:text-blue-400">{bmiCategory}</span>
                </p>
              </div>
            </div>
            <div className="lg:col-span-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 transition-all duration-500" />
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-white">
                <AnimatePresence>
                  {isCalculating && (
                    <motion.div
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      exit={{ scale: 0, rotate: 720 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-32 h-32 border-4 border-white rounded-full border-t-transparent animate-spin" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <Activity className="w-24 h-24 mb-4" />
                <h2 className="text-4xl font-bold mb-2">Body Mass Index</h2>
                <p className="text-xl mb-8">Calculator</p>
                <Button
                  onClick={handleCalculate}
                  size="lg"
                  className="bg-white text-gray-800 hover:bg-gray-100"
                  disabled={isCalculating}
                >
                  Calculate BMI
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}