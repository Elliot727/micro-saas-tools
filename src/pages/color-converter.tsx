"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Palette } from 'lucide-react'
import Link from 'next/link'
import '../app/globals.css'; // Your global styles

const colorFormats = ['HEX', 'RGB', 'HSL']

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h = 0, s = (max + min) / 2
  const l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
}

function hslToRgb(h: number, s: number, l: number) {
  s /= 100
  l /= 100
  const a = s * Math.min(l, 1 - l)
  const f = (n: number, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
  return { r: Math.round(f(0) * 255), g: Math.round(f(8) * 255), b: Math.round(f(4) * 255) }
}

export default function ColorConverter() {
  const [fromFormat, setFromFormat] = useState('HEX')
  const [toFormat, setToFormat] = useState('RGB')
  const [inputColor, setInputColor] = useState('')
  const [outputColor, setOutputColor] = useState('')
  const [previewColor, setPreviewColor] = useState('#FFFFFF')
  const [isConverting, setIsConverting] = useState(false)

  const handleConvert = () => {
    setIsConverting(true)
    setTimeout(() => {
      let result = ''
      if (fromFormat === 'HEX' && toFormat === 'RGB') {
        const rgb = hexToRgb(inputColor)
        if (rgb) result = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
      } else if (fromFormat === 'HEX' && toFormat === 'HSL') {
        const rgb = hexToRgb(inputColor)
        if (rgb) {
          const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
          result = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
        }
      } else if (fromFormat === 'RGB' && toFormat === 'HEX') {
        const [r, g, b] = inputColor.split(',').map(Number)
        result = rgbToHex(r, g, b)
      } else if (fromFormat === 'RGB' && toFormat === 'HSL') {
        const [r, g, b] = inputColor.split(',').map(Number)
        const hsl = rgbToHsl(r, g, b)
        result = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
      } else if (fromFormat === 'HSL' && toFormat === 'RGB') {
        const [h, s, l] = inputColor.split(',').map(Number)
        const rgb = hslToRgb(h, s, l)
        result = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
      } else if (fromFormat === 'HSL' && toFormat === 'HEX') {
        const [h, s, l] = inputColor.split(',').map(Number)
        const rgb = hslToRgb(h, s, l)
        result = rgbToHex(rgb.r, rgb.g, rgb.b)
      }
      setOutputColor(result)
      setPreviewColor(result)
      setIsConverting(false)
    }, 1000)
  }

  useEffect(() => {
    if (fromFormat === 'HEX') {
      setPreviewColor(inputColor)
    } else if (fromFormat === 'RGB') {
      setPreviewColor(`rgb(${inputColor})`)
    } else if (fromFormat === 'HSL') {
      setPreviewColor(`hsl(${inputColor})`)
    }
  }, [inputColor, fromFormat])

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
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mt-8">Color Converter</h1>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fromFormat" className="text-gray-600 dark:text-gray-300">From Format</Label>
                  <Select value={fromFormat} onValueChange={setFromFormat}>
                    <SelectTrigger id="fromFormat">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      {colorFormats.map((format) => (
                        <SelectItem key={format} value={format}>{format}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="inputColor" className="text-gray-600 dark:text-gray-300">Input Color</Label>
                  <Input
                    id="inputColor"
                    type="text"
                    value={inputColor}
                    onChange={(e) => setInputColor(e.target.value)}
                    placeholder={fromFormat === 'HEX' ? '#RRGGBB' : fromFormat === 'RGB' ? 'R,G,B' : 'H,S,L'}
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="toFormat" className="text-gray-600 dark:text-gray-300">To Format</Label>
                  <Select value={toFormat} onValueChange={setToFormat}>
                    <SelectTrigger id="toFormat">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      {colorFormats.map((format) => (
                        <SelectItem key={format} value={format}>{format}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="outputColor" className="text-gray-600 dark:text-gray-300">Converted Color</Label>
                <Input
                  id="outputColor"
                  type="text"
                  value={outputColor}
                  readOnly
                  placeholder="Converted color will appear here"
                  className="w-full"
                />
              </div>
            </div>
            <div className="lg:col-span-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 transition-all duration-500" />
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-white">
              
                <Palette className="w-24 h-24 mb-4" />
                <h2 className="text-4xl font-bold mb-2">Color</h2>
                <p className="text-xl mb-8">Converter</p>
                <div className="w-48 h-48 rounded-full shadow-lg mb-8" style={{ backgroundColor: previewColor }} />
                <Button
                  onClick={handleConvert}
                  size="lg"
                  className="bg-white text-gray-800 hover:bg-gray-100"
                  disabled={isConverting}
                >
                  Convert
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}