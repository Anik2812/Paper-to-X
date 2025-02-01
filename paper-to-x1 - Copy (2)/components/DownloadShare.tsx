import { ArrowDownTrayIcon, ShareIcon } from "@heroicons/react/24/solid"

export default function DownloadShare() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Download and Share</h2>
      <div className="flex flex-wrap gap-4">
        <button className="flex items-center px-4 py-2 bg-gradient-to-r from-mint-green to-soft-lavender text-white rounded-md hover:opacity-90 transition-opacity">
          <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
          Download All
        </button>
        <button className="flex items-center px-4 py-2 bg-deep-ocean-blue text-white rounded-md hover:bg-deep-ocean-blue/80 transition-colors">
          <ShareIcon className="h-5 w-5 mr-2" />
          Share
        </button>
      </div>
      <div className="mt-4 flex items-center space-x-4">
        <button className="text-deep-ocean-blue dark:text-soft-lavender hover:underline">Save to Google Drive</button>
        <button className="text-deep-ocean-blue dark:text-soft-lavender hover:underline">Save to Dropbox</button>
      </div>
    </div>
  )
}

