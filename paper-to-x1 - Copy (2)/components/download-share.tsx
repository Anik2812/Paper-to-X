"use client"

import { useState } from "react"
import { Download, Share2, Check, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export function DownloadShare({ outputs, fileId }) {
  const [downloading, setDownloading] = useState(false)
  const [sharing, setSharing] = useState(false)
  const { toast } = useToast()

  const handleDownload = async () => {
    if (!fileId || outputs.length === 0) {
      toast({
        title: "No Outputs Available",
        description: "Please generate some outputs first.",
        variant: "destructive",
      })
      return
    }

    try {
      setDownloading(true)
      // Here you would implement the actual download logic
      // For example, creating a zip file of all outputs
      
      toast({
        title: "Download Complete",
        description: "Your files have been downloaded successfully.",
      })
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error downloading your files.",
        variant: "destructive",
      })
    } finally {
      setDownloading(false)
    }
  }

  const handleShare = async () => {
    if (!fileId || outputs.length === 0) {
      toast({
        title: "No Outputs Available",
        description: "Please generate some outputs first.",
        variant: "destructive",
      })
      return
    }

    try {
      setSharing(true)
      // Here you would implement the actual sharing logic
      // For example, generating shareable links
      
      toast({
        title: "Shared Successfully",
        description: "Your content has been shared.",
      })
    } catch (error) {
      toast({
        title: "Sharing Failed",
        description: "There was an error sharing your content.",
        variant: "destructive",
      })
    } finally {
      setSharing(false)
    }
  }

  return (
    <Card className="hover-lift transition-all duration-300 rounded-apple">
      <CardHeader>
        <CardTitle>Download & Share</CardTitle>
        <CardDescription>Get your outputs and share them with others</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Button
            className="flex items-center justify-center transition-all duration-300 rounded-lg h-auto py-4"
            onClick={handleDownload}
            disabled={downloading || !fileId || outputs.length === 0}
          >
            {downloading ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                <span>Downloaded</span>
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                <span>Download All</span>
              </>
            )}
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-center transition-all duration-300 rounded-lg h-auto py-4"
            onClick={handleShare}
            disabled={sharing || !fileId || outputs.length === 0}
          >
            {sharing ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                <span>Shared</span>
              </>
            ) : (
              <>
                <Share2 className="mr-2 h-4 w-4" />
                <span>Share</span>
              </>
            )}
          </Button>
        </div>
        <Button
          variant="ghost"
          className="flex items-center justify-center transition-all duration-300 rounded-lg h-auto py-4 w-full"
          disabled={!fileId || outputs.length === 0}
        >
          <Cloud className="mr-2 h-4 w-4" />
          <span>Save to Google Drive</span>
        </Button>
      </CardContent>
    </Card>
  )
}