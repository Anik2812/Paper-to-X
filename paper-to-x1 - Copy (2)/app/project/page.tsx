"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { UploadSection } from "@/components/upload-section"
import { OutputSelection } from "@/components/output-selection"
import { CustomizationOptions } from "@/components/customization-options"
import { PreviewSection } from "@/components/preview-section"
import { DownloadShare } from "@/components/download-share"
import { Footer } from "@/components/footer"

export default function ProjectPage() {
  const [selectedOutputs, setSelectedOutputs] = useState([])
  const [fileId, setFileId] = useState(null)
  const [customizationOptions, setCustomizationOptions] = useState({})

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Paper to X Project</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <UploadSection onFileUpload={setFileId} />
            <OutputSelection 
              selectedOutputs={selectedOutputs} 
              setSelectedOutputs={setSelectedOutputs}
              fileId={fileId}
            />
            <PreviewSection 
              selectedOutputs={selectedOutputs}
              fileId={fileId}
              customizationOptions={customizationOptions}
            />
          </div>
          <div className="lg:col-span-1 space-y-8">
            <CustomizationOptions 
              selectedOutputs={selectedOutputs}
              onOptionsChange={setCustomizationOptions}
            />
            <DownloadShare 
              outputs={selectedOutputs}
              fileId={fileId}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}