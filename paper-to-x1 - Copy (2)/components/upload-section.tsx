"use client"

import { useState } from "react"
import { Upload, FileText, X, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"
import { uploadFile } from "@/lib/api"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface UploadSectionProps {
  onFileUpload: (fileId: string | null) => void;
}

export function UploadSection({ onFileUpload }: UploadSectionProps) {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const { toast } = useToast()

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      await handleUpload(selectedFile)
    }
  }

  const handleUpload = async (selectedFile: File) => {
    try {
      setUploading(true)
      setProgress(0)
      
      // Simulate progress while actually uploading
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90))
      }, 500)

      const response = await uploadFile(selectedFile)
      
      clearInterval(progressInterval)
      setProgress(100)
      
      if (response.file_id) {
        onFileUpload(response.file_id)
        toast({
          title: "Upload Complete",
          description: "Your file has been successfully uploaded.",
        })
      } else {
        throw new Error("No file ID received")
      }
    } catch (error) {
      console.error("Upload error:", error)
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your file. Please try again.",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }

  const removeFile = () => {
    setFile(null)
    onFileUpload(null)
    setProgress(0)
  }

  return (
    <div className="bg-card text-card-foreground rounded-apple shadow-lg p-6 hover-lift transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Upload Your Research Paper</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <HelpCircle className="h-6 w-6 text-primary hover:text-primary/80 transition-colors" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>How it works</DialogTitle>
              <DialogDescription className="space-y-4">
                <p>
                  Upload your research paper in PDF format. Our AI will analyze your paper and generate
                  various outputs based on your selection.
                </p>
                <p>The process is simple:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Upload your paper</li>
                  <li>Select desired output formats</li>
                  <li>Customize the output settings</li>
                  <li>Generate and download your results</li>
                </ol>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border-2 border-dashed border-muted-foreground rounded-lg p-8 text-center transition-colors duration-300 hover:border-primary">
        <input 
          type="file" 
          id="file-upload" 
          className="hidden" 
          onChange={handleFileChange} 
          accept=".pdf"
          disabled={uploading}
        />
        <label 
          htmlFor="file-upload" 
          className={`cursor-pointer flex flex-col items-center ${uploading ? 'opacity-50' : ''}`}
        >
          <Upload className="h-12 w-12 text-muted-foreground mb-4 transition-colors duration-300 group-hover:text-primary" />
          <span className="text-lg font-medium">
            {file ? file.name : "Drag and drop your file here, or click to select"}
          </span>
          <span className="text-sm text-muted-foreground mt-2">Supported format: PDF</span>
        </label>
      </div>
      {file && !uploading && (
        <div className="mt-4 flex items-center justify-between bg-muted p-2 rounded-md">
          <div className="flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">{file.name}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={removeFile}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      {uploading && (
        <div className="mt-4">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-muted-foreground mt-2">Uploading... {progress}%</p>
        </div>
      )}
    </div>
  )
}