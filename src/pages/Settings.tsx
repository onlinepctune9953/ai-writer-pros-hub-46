import { useState } from "react";

export default function Settings() {
  const [apiKey, setApiKey] = useState("");
  const [selectedModel, setSelectedModel] = useState("OpenAI");
  const [advancedOptions, setAdvancedOptions] = useState(false);
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(1000);

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">API Key</label>
        <input
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-full p-3 border rounded-lg"
          placeholder="Paste your API key here"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Select Model</label>
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="w-full p-3 border rounded-lg"
        >
          <option value="OpenAI">OpenAI (GPT-4/3.5)</option>
          <option value="Claude">Claude</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={advancedOptions}
            onChange={() => setAdvancedOptions(!advancedOptions)}
            className="mr-2"
          />
          Advanced Options
        </label>
      </div>

      {advancedOptions && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Temperature</label>
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="w-full p-3 border rounded-lg"
              step="0.1"
              min="0"
              max="1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Max Tokens</label>
            <input
              type="number"
              value={maxTokens}
              onChange={(e) => setMaxTokens(parseInt(e.target.value))}
              className="w-full p-3 border rounded-lg"
              min="1"
              max="4000"
            />
          </div>
        </div>
      )}

      <button className="mt-6 w-full p-3 bg-green-600 text-white rounded-lg">
        Save Settings
      </button>
    </div>
  );
}