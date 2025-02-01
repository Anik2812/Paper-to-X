import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    description: "Perfect for individual researchers",
    features: [
      "5 paper transformations per month",
      "PowerPoint and Podcast outputs",
      "Basic customization options",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$24.99",
    description: "Ideal for research teams and departments",
    features: [
      "Unlimited paper transformations",
      "All output formats including video",
      "Advanced customization options",
      "Priority email and chat support",
      "Team collaboration features",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Custom integrations",
      "Dedicated account manager",
      "On-premise deployment options",
      "24/7 phone and email support",
      "Custom AI model training",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="hover-lift transition-all duration-300 rounded-apple">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-full">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

