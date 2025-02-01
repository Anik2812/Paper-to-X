"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function CustomizationOptions({ selectedOutputs }) {
  const [options, setOptions] = useState({
    ppt: { slides: 5, template: "professional" },
    podcast: { duration: 5, voice: "natural" },
    graphical: { style: "modern", colorScheme: "default" },
    video: { duration: 3, style: "minimal" },
    text: { length: "medium", format: "structured" },
    infographic: { style: "clean", layout: "vertical" },
  })

  const handleOptionChange = (output, key, value) => {
    setOptions((prev) => ({
      ...prev,
      [output]: {
        ...prev[output],
        [key]: value,
      },
    }))
  }

  if (selectedOutputs.length === 0) {
    return null
  }

  return (
    <Card className="hover-lift transition-all duration-300">
      <CardHeader>
        <CardTitle>Customize Your Output</CardTitle>
        <CardDescription>Adjust settings to personalize your results</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {selectedOutputs.map((output, index) => (
          <div key={output}>
            {index > 0 && <hr className="my-6 border-t border-gray-200 dark:border-gray-700" />}
            <h3 className="text-lg font-semibold mb-4">{output.charAt(0).toUpperCase() + output.slice(1)} Options</h3>
            <div className="space-y-4">
              {/* Output-specific options */}
              {output === "ppt" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="slides">Number of Slides</Label>
                    <Slider
                      id="slides"
                      min={5}
                      max={15}
                      step={1}
                      value={[options.ppt.slides]}
                      onValueChange={(value) => handleOptionChange("ppt", "slides", value[0])}
                    />
                    <p className="text-sm text-muted-foreground">{options.ppt.slides} slides</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="template">Template Style</Label>
                    <Select
                      value={options.ppt.template}
                      onValueChange={(value) => handleOptionChange("ppt", "template", value)}
                    >
                      <SelectTrigger id="template">
                        <SelectValue placeholder="Select template" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="creative">Creative</SelectItem>
                        <SelectItem value="minimal">Minimal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
              {output === "podcast" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Slider
                      id="duration"
                      min={1}
                      max={10}
                      step={1}
                      value={[options.podcast.duration]}
                      onValueChange={(value) => handleOptionChange("podcast", "duration", value[0])}
                    />
                    <p className="text-sm text-muted-foreground">{options.podcast.duration} minutes</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="voice">Voice Style</Label>
                    <Select
                      value={options.podcast.voice}
                      onValueChange={(value) => handleOptionChange("podcast", "voice", value)}
                    >
                      <SelectTrigger id="voice">
                        <SelectValue placeholder="Select voice" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="natural">Natural</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
              {output === "graphical" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="style">Visual Style</Label>
                    <Select
                      value={options.graphical.style}
                      onValueChange={(value) => handleOptionChange("graphical", "style", value)}
                    >
                      <SelectTrigger id="style">
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="modern">Modern</SelectItem>
                        <SelectItem value="classic">Classic</SelectItem>
                        <SelectItem value="minimalist">Minimalist</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="colorScheme">Color Scheme</Label>
                    <Select
                      value={options.graphical.colorScheme}
                      onValueChange={(value) => handleOptionChange("graphical", "colorScheme", value)}
                    >
                      <SelectTrigger id="colorScheme">
                        <SelectValue placeholder="Select color scheme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="monochrome">Monochrome</SelectItem>
                        <SelectItem value="vibrant">Vibrant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
              {output === "video" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="videoDuration">Duration (minutes)</Label>
                    <Slider
                      id="videoDuration"
                      min={1}
                      max={5}
                      step={1}
                      value={[options.video.duration]}
                      onValueChange={(value) => handleOptionChange("video", "duration", value[0])}
                    />
                    <p className="text-sm text-muted-foreground">{options.video.duration} minutes</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="videoStyle">Video Style</Label>
                    <Select
                      value={options.video.style}
                      onValueChange={(value) => handleOptionChange("video", "style", value)}
                    >
                      <SelectTrigger id="videoStyle">
                        <SelectValue placeholder="Select video style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minimal">Minimal</SelectItem>
                        <SelectItem value="animated">Animated</SelectItem>
                        <SelectItem value="whiteboard">Whiteboard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
              {output === "text" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="length">Summary Length</Label>
                    <Select
                      value={options.text.length}
                      onValueChange={(value) => handleOptionChange("text", "length", value)}
                    >
                      <SelectTrigger id="length">
                        <SelectValue placeholder="Select summary length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="long">Long</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="format">Text Format</Label>
                    <Select
                      value={options.text.format}
                      onValueChange={(value) => handleOptionChange("text", "format", value)}
                    >
                      <SelectTrigger id="format">
                        <SelectValue placeholder="Select text format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="structured">Structured</SelectItem>
                        <SelectItem value="narrative">Narrative</SelectItem>
                        <SelectItem value="bullet-points">Bullet Points</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
              {output === "infographic" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="infographicStyle">Infographic Style</Label>
                    <Select
                      value={options.infographic.style}
                      onValueChange={(value) => handleOptionChange("infographic", "style", value)}
                    >
                      <SelectTrigger id="infographicStyle">
                        <SelectValue placeholder="Select infographic style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clean">Clean</SelectItem>
                        <SelectItem value="data-heavy">Data-Heavy</SelectItem>
                        <SelectItem value="illustrative">Illustrative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="layout">Layout</Label>
                    <Select
                      value={options.infographic.layout}
                      onValueChange={(value) => handleOptionChange("infographic", "layout", value)}
                    >
                      <SelectTrigger id="layout">
                        <SelectValue placeholder="Select layout" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vertical">Vertical</SelectItem>
                        <SelectItem value="horizontal">Horizontal</SelectItem>
                        <SelectItem value="grid">Grid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

