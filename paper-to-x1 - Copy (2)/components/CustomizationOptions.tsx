import { useState } from "react"
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid"

export default function CustomizationOptions() {
  const [summaryLength, setSummaryLength] = useState(5)
  const [outputStyle, setOutputStyle] = useState("formal")
  const [language, setLanguage] = useState("english")

  return (
    <div className="bg-white dark:bg-dark-charcoal rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Customize Your Output</h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="summary-length" className="block text-sm font-medium mb-2 flex items-center">
            Summary Length (minutes)
            <QuestionMarkCircleIcon
              className="h-4 w-4 ml-1 text-medium-gray cursor-help"
              title="Choose the desired length of your summary"
            />
          </label>
          <input
            type="range"
            id="summary-length"
            min="1"
            max="10"
            value={summaryLength}
            onChange={(e) => setSummaryLength(Number.parseInt(e.target.value))}
            className="w-full h-2 bg-soft-lavender rounded-lg appearance-none cursor-pointer"
          />
          <span className="block text-center mt-2">{summaryLength} minutes</span>
        </div>
        <div>
          <label htmlFor="output-style" className="block text-sm font-medium mb-2 flex items-center">
            Output Style
            <QuestionMarkCircleIcon
              className="h-4 w-4 ml-1 text-medium-gray cursor-help"
              title="Select the tone and style of your output"
            />
          </label>
          <select
            id="output-style"
            value={outputStyle}
            onChange={(e) => setOutputStyle(e.target.value)}
            className="w-full p-2 border border-soft-lavender rounded-md bg-white dark:bg-dark-charcoal"
          >
            <option value="formal">Formal</option>
            <option value="casual">Casual</option>
            <option value="academic">Academic</option>
          </select>
        </div>
        <div>
          <label htmlFor="language" className="block text-sm font-medium mb-2 flex items-center">
            Language
            <QuestionMarkCircleIcon
              className="h-4 w-4 ml-1 text-medium-gray cursor-help"
              title="Choose the language for your output"
            />
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 border border-soft-lavender rounded-md bg-white dark:bg-dark-charcoal"
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
          </select>
        </div>
      </div>
    </div>
  )
}

