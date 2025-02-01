"use client"

import { FileText, Mic, Image, Video, BarChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"
import { generateOutput } from "@/lib/api"

const outputTypes = [
  { id: "ppt", name: "PowerPoint", icon: FileText, description: "Create a slide deck" },
  { id: "podcast", name: "Podcast", icon: Mic, description: "Generate an audio summary" },
  { id: "graphical", name: "Graphical", icon: Image, description: "Visualize key concepts" },
  { id: "video", name: "Short Video", icon: Video, description: "Produce an animated summary" },
  { id: "text", name: "Text Summary", icon: FileText, description: "Extract key text and insights" },
  { id: "infographic", name: "Infographic", icon: BarChart, description: "Create a visual data representation" },
]

interface OutputSelectionProps {
  selectedOutputs: string[];
  setSelectedOutputs: React.Dispatch<React.SetStateAction<string[]>>;
  fileId: string | null;
}

export function OutputSelection({ selectedOutputs, setSelectedOutputs, fileId }: OutputSelectionProps) {
  const { toast } = useToast()

  const toggleOutput = async (id: string) => {
    if (!fileId) {
      toast({
        title: "No File Selected",
        description: "Please upload a file first.",
        variant: "destructive",
      });
      return;
    }
  
    if (selectedOutputs.includes(id)) {
      setSelectedOutputs((prev) => prev.filter((item) => item !== id));
    } else {
      try {
        // Generate the output when selected
        const options = {}; // You can pass customization options here
        await generateOutput(id, fileId, options);
        setSelectedOutputs((prev) => [...prev, id]);
  
        toast({
          title: "Output Added",
          description: `${id.charAt(0).toUpperCase() + id.slice(1)} generation started.`,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to generate output. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Select Output Formats</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {outputTypes.map((type) => (
          <Card
            key={type.id}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
              selectedOutputs.includes(type.id) ? "ring-2 ring-primary" : "",
            )}
            onClick={() => toggleOutput(type.id)}
          >
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <type.icon
                  className={cn(
                    "h-5 w-5 transition-colors duration-300",
                    selectedOutputs.includes(type.id) ? "text-primary" : "",
                  )}
                />
                <span>{type.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{type.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}