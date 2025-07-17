import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

const tools = [
  { id: "content-repurposing", name: "Content Repurposing Tool" },
  { id: "ai-humanizer", name: "AI Humanizer" },
  { id: "email-generator", name: "Email Generator" },
  { id: "social-media-suite", name: "Social Media Suite" },
  { id: "blog-content-creator", name: "Blog Content Creator" },
  { id: "amazon-affiliate-extension", name: "Amazon Affiliate Extension" },
];

export default function Dashboard() {
  const [selectedTool, setSelectedTool] = useState(tools[0].id);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-muted p-4">
        <h2 className="text-lg font-bold mb-4">Tools</h2>
        <ul className="space-y-2">
          {tools.map((tool) => (
            <li
              key={tool.id}
              className={`p-2 rounded-lg cursor-pointer transition-all ${
                selectedTool === tool.id ? "bg-green-500 text-white" : "hover:bg-muted/50"
              }`}
              onClick={() => setSelectedTool(tool.id)}
            >
              {tool.name}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">User Settings</h2>
          <Button className="w-full">Manage Settings</Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Navigation />
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
          <p className="text-muted-foreground mb-8">
            Select a tool from the menu to get started.
          </p>
          <Button className="text-lg px-8">Explore {tools.find((tool) => tool.id === selectedTool)?.name}</Button>
        </div>
        <Footer />
      </main>
    </div>
  );
}
