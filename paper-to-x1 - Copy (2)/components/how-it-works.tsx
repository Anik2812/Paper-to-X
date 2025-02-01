import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    title: "Upload Your Paper",
    description: "Simply upload your research paper in PDF, TXT, or LaTeX format.",
  },
  {
    title: "Choose Output Format",
    description: "Select from various output formats like presentations, podcasts, or videos.",
  },
  {
    title: "Customize Options",
    description: "Adjust settings like summary length, style, and language to suit your needs.",
  },
  {
    title: "Generate and Review",
    description: "Our AI processes your paper and generates the chosen output for your review.",
  },
  {
    title: "Download or Share",
    description: "Download your transformed content or share it directly with your audience.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="hover-lift transition-all duration-300 rounded-apple">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-2">
                    {index + 1}
                  </span>
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

