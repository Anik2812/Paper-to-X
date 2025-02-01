import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Paper to X</h2>
        <Card className="rounded-apple">
          <CardHeader>
            <CardTitle>Our Hackathon Project</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Paper to X is a revolutionary tool developed during an intense hackathon. Our goal is to transform the way
              researchers share their work by converting complex papers into various engaging formats.
            </p>
            <p className="mb-4">
              Using cutting-edge AI technology, we aim to bridge the gap between academic research and public
              understanding, making scientific knowledge more accessible to everyone.
            </p>
            <p>
              This project showcases the potential of AI in academic publishing and demonstrates how technology can
              enhance the dissemination of scientific knowledge.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

