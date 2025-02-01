import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Mic, Image, Video, Globe, Lock } from "lucide-react"

const features = [
  {
    title: "Instant Presentations",
    description: "Transform your research paper into a professional PowerPoint presentation in seconds.",
    icon: Zap,
  },
  {
    title: "Audio Summaries",
    description: "Convert your paper into an engaging podcast-style audio summary.",
    icon: Mic,
  },
  {
    title: "Visual Abstracts",
    description: "Create eye-catching graphical abstracts to visually communicate your research.",
    icon: Image,
  },
  {
    title: "Video Explainers",
    description: "Generate short, animated video summaries of your research papers.",
    icon: Video,
  },
  {
    title: "Multi-language Support",
    description: "Translate and adapt your content for a global audience.",
    icon: Globe,
  },
  {
    title: "Secure and Private",
    description: "Your research data is always protected with state-of-the-art encryption.",
    icon: Lock,
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover-lift transition-all duration-300 rounded-apple">
              <CardHeader>
                <feature.icon className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

