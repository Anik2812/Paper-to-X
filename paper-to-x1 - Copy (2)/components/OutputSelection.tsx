import { PresentationChartBarIcon, MicrophoneIcon, PhotoIcon, VideoCameraIcon } from "@heroicons/react/24/outline"

const outputTypes = [
  { id: "ppt", name: "PowerPoint", icon: PresentationChartBarIcon, description: "Create a slide deck" },
  { id: "podcast", name: "Podcast", icon: MicrophoneIcon, description: "Generate an audio summary" },
  { id: "graphical", name: "Graphical Abstract", icon: PhotoIcon, description: "Visualize key concepts" },
  { id: "video", name: "Short Video", icon: VideoCameraIcon, description: "Produce an animated summary" },
]

export default function OutputSelection() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Select Output Formats</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {outputTypes.map((type) => (
          <div
            key={type.id}
            className="bg-white dark:bg-dark-charcoal border border-light-gray rounded-lg p-4 hover:border-mint-green dark:hover:border-mint-green transition-colors cursor-pointer group"
          >
            <type.icon className="h-8 w-8 text-deep-ocean-blue dark:text-soft-lavender mb-2 group-hover:text-mint-green transition-colors" />
            <h3 className="text-lg font-semibold mb-1">{type.name}</h3>
            <p className="text-sm text-medium-gray">{type.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

