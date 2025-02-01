import { useState } from "react"
import { CloudArrowUpIcon } from "@heroicons/react/24/solid"

export default function UploadSection() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      // Simulate file upload
      setUploading(true)
      setTimeout(() => setUploading(false), 2000)
    }
  }

  return (
    <div className="bg-white dark:bg-dark-charcoal rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Upload Your Research Paper</h2>
      <div className="border-2 border-dashed border-deep-ocean-blue dark:border-soft-lavender rounded-lg p-8 text-center">
        <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} accept=".pdf,.txt,.tex" />
        <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
          <CloudArrowUpIcon className="h-12 w-12 text-deep-ocean-blue dark:text-soft-lavender mb-4" />
          <span className="text-lg font-medium">
            {file ? file.name : "Drag and drop your file here, or click to select"}
          </span>
          <span className="text-sm text-medium-gray mt-2">Supported formats: PDF, TXT, LaTeX</span>
        </label>
      </div>
      {uploading && (
        <div className="mt-4">
          <div className="h-2 bg-mint-green rounded-full" style={{ width: "50%" }}></div>
        </div>
      )}
      <button className="mt-6 bg-deep-ocean-blue hover:bg-deep-ocean-blue/80 text-white font-bold py-2 px-4 rounded transition-colors w-full">
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  )
}

