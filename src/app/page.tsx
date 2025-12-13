"use client";

import Header from "./components/Header";
import FeatureGrid from "./components/FeatureGrid";
import HistoryPanel from "./components/HistoryPanel";
import tabs from "./data/tabs";
import { useState } from "react";
import { HistoryItem, Tab } from "./types";
import CodeExplanation from "./components/CodeExplanation";
import CodeDebugging from "./components/CodeDebugging";
import CodeGeneration from "./components/CodeGeneration";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab["id"]>("explain");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const addToHistory = (
    type: HistoryItem["type"],
    input: string,
    output: string
  ) => {
    const newItem: HistoryItem = {
      id: Date.now(),
      type,
      timestamp: new Date().toLocaleDateString(),
      input,
      output,
    };
    setHistory((prev) => [newItem, ...prev.slice(0, 9)]);
  };

  return (
 <div className="min-h-screen bg-gradient-to-r from-gray-950 via-gray-900 to-gray-700 text-white">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT PANEL */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/70 border border-gray-800 rounded-2xl shadow-xl overflow-hidden">
              
              {/* TABS */}
              <div className="flex gap-2 p-3 border-b border-gray-800 bg-gray-900">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all
                      ${
                        activeTab === tab.id
                          ? `bg-gradient-to-r ${tab.gradient} text-white shadow-md`
                          : "text-gray-400 hover:text-white hover:bg-gray-800"
                      }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* TAB CONTENT */}
              <div className="p-6">
                {activeTab === "explain" && (
                  <CodeExplanation addToHistory={addToHistory} />
                )}
                {activeTab === "debug" && (
                  <CodeDebugging addToHistory={addToHistory} />
                )}
                {activeTab === "generate" && (
                  <CodeGeneration addToHistory={addToHistory} />
                )}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL (HISTORY) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <HistoryPanel history={history} />
            </div>
          </div>
        </div>

        {/* FEATURES */}
      </main>

      {/* FOOTER */}
        <div>
          <br />
        </div>
        <div className="">
          <FeatureGrid />
        </div>
      <footer className="text-center py-8 text-gray-400 ">
        Powered by Google Gemini AI
      </footer>
    </div>
  );
}
