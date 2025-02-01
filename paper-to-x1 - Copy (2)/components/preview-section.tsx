"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { generateOutput } from "@/lib/api"

interface PreviewSectionProps {
  selectedOutputs: string[];
  fileId: string;
  customizationOptions: Record<string, any>;
}

export function PreviewSection({ selectedOutputs, fileId, customizationOptions }: PreviewSectionProps) {
  const [activeTab, setActiveTab] = useState("")
  const [loading, setLoading] = useState(false)
  const [previewContent, setPreviewContent] = useState<{ [key: string]: any }>({})

  useEffect(() => {
    if (selectedOutputs.length > 0 && !selectedOutputs.includes(activeTab)) {
      setActiveTab(selectedOutputs[0])
    }
  }, [selectedOutputs, activeTab])

  const handleTabChange = async (value: string) => {
    setActiveTab(value)
    if (!previewContent[value]) {
      setLoading(true)
      try {
        const options = customizationOptions[value] || {}
        const result = await generateOutput(value, fileId, options)
        setPreviewContent(prev => ({
          ...prev,
          [value]: result.preview
        }))
      } catch (error) {
        console.error('Error generating preview:', error)
      } finally {
        setLoading(false)
      }
    }
  }

  const renderPreview = (type: string) => {
    const content = previewContent[type]
    if (!content) return null

    switch (type) {
      case "text":
        return (
          <div className="p-6">
            <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )

      case "podcast":
        return (
          <div className="p-6 space-y-4">
            <div className="bg-muted rounded-lg p-4">
              <audio controls className="w-full" src={content.audio_url}>
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-medium mb-2">Script Preview</h4>
              <div className="max-h-60 overflow-y-auto text-sm">
                {content.script}
              </div>
            </div>
          </div>
        )

      case "graphical":
      case "infographic":
        return (
          <div className="p-6">
            <div className="bg-muted rounded-lg p-4">
              <div className="max-h-60 overflow-y-auto">
                {content}
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="p-6 text-center text-muted-foreground">
            Preview not available for this format
          </div>
        )
    }
  }

  if (selectedOutputs.length === 0) {
    return (
      <Card className="hover-lift transition-all duration-300 rounded-apple">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6">Preview</h2>
          <p className="text-center text-muted-foreground">Select an output format to see the preview.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="hover-lift transition-all duration-300 rounded-apple">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Preview</h2>
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex justify-center p-4">
              <TabsList className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
                {selectedOutputs.map((output) => (
                  <TabsTrigger key={output} value={output} className="rounded-md px-3 py-1 text-sm font-medium">
                    {output.charAt(0).toUpperCase() + output.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          {loading ? (
            <div className="flex justify-center items-center h-[400px]">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            <div className="mt-4 rounded-lg overflow-hidden border bg-card">
              {selectedOutputs.map((output) => (
                <TabsContent key={output} value={output} className="m-0">
                  {renderPreview(output)}
                </TabsContent>
              ))}
            </div>
          )}
        </Tabs>
      </CardContent>
    </Card>
  )
}