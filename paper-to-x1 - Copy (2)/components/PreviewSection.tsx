"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

const tabs = [
  { id: "powerpoint", name: "PowerPoint", content: <PPTPreview /> },
  { id: "podcast", name: "Podcast", content: <PodcastPreview /> },
  { id: "graphical", name: "Graphical", content: <GraphicalAbstractPreview /> },
  { id: "video", name: "Video", content: <VideoPreview /> },
  { id: "text", name: "Text", content: <TextSummaryPreview /> },
  { id: "infographic", name: "Infographic", content: <InfographicPreview /> },
]

export function PreviewSection() {
  const [activeTab, setActiveTab] = useState("powerpoint")
  const [loading, setLoading] = useState(false)

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <Card className="hover-lift transition-all duration-300 rounded-apple">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Preview</h2>
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
          <div className="bg-muted p-2 rounded-lg">
            <TabsList className="grid grid-cols-3 gap-4 p-2 bg-black/20 rounded-lg w-full">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="data-[state=active]:bg-background rounded-md px-4 py-3 text-sm font-medium transition-all flex justify-center"
                >
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {loading ? (
            <div className="flex justify-center items-center h-[400px]">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            <div className="mt-4 rounded-lg overflow-hidden border bg-card">
              {tabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="mt-0">
                  {tab.content}
                </TabsContent>
              ))}
            </div>
          )}
        </Tabs>
        <Button className="w-full mt-6 rounded-full" size="lg">
          Generate Full Output
        </Button>
      </CardContent>
    </Card>
  )
}

function PPTPreview() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {[1, 2, 3, 4, 5, 6].map((slide) => (
        <div
          key={slide}
          className="aspect-video bg-muted rounded-lg flex items-center justify-center hover:bg-muted-foreground/10 transition-colors duration-300"
        >
          Slide {slide}
        </div>
      ))}
    </div>
  )
}

function PodcastPreview() {
  return (
    <div className="p-6">
      <div className="bg-muted rounded-lg p-4">
        <audio controls className="w-full">
          <source src="/sample-audio.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  )
}

function GraphicalAbstractPreview() {
  return (
    <div className="p-6">
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <img
          src="/graphical-abstract-preview.png"
          alt="Graphical Abstract Preview"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  )
}

function VideoPreview() {
  return (
    <div className="p-6">
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <video controls className="w-full h-full">
          <source src="/sample-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

function TextSummaryPreview() {
  return (
    <div className="p-6">
      <div className="bg-muted rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold">Text Summary</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This is a sample text summary of the research paper. It includes key points, methodology, results, and
          conclusions. The summary is designed to provide a quick overview of the paper's content, allowing readers to
          grasp the main ideas without reading the entire document.
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>Key finding 1</li>
          <li>Key finding 2</li>
          <li>Key finding 3</li>
        </ul>
      </div>
    </div>
  )
}

function InfographicPreview() {
  return (
    <div className="p-6">
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <img
          src="/infographic-preview.png"
          alt="Infographic Preview"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  )
}

