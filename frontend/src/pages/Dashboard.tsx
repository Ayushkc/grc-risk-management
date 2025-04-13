import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import { AlertTriangle, Bell, ShieldCheck } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex-1 p-6 bg-gray-50 overflow-auto">
      <div className="text-2xl font-semibold mb-1">Welcome back, John 👋</div>
      <p className="mb-6 text-gray-600">Here's what's happening today in your risk profile.</p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card className="border-red-500">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 text-red-600">
              <AlertTriangle />
              <span className="font-medium">High-Risk Alerts</span>
            </div>
            <div className="text-3xl font-bold mt-2">6</div>
          </CardContent>
        </Card>
        
        <Card className="border-yellow-500">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 text-yellow-600">
              <Bell />
              <span className="font-medium">Open Issues</span>
            </div>
            <div className="text-3xl font-bold mt-2">14</div>
          </CardContent>
        </Card>
        
        <Card className="border-blue-500">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 text-blue-600">
              <ShieldCheck />
              <span className="font-medium">Third-Party Reviews Pending</span>
            </div>
            <div className="text-3xl font-bold mt-2">3</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Risk Heatmap */}
        <Card>
          <CardTitle className="p-4 pb-0">Risk Heatmap</CardTitle>
          <CardContent className="p-4">
            <div className="w-full h-48 bg-white border rounded-lg flex items-center justify-center">
              <span className="text-gray-400">[Heatmap Placeholder]</span>
            </div>
          </CardContent>
        </Card>

        {/* Action Items */}
        <Card>
          <CardTitle className="p-4 pb-0">Action Items</CardTitle>
          <CardContent className="p-4 space-y-2">
            <div>○ Review risk assessment report <span className="text-gray-400">(May 5, In Progress)</span></div>
            <div>○ Investigate security incident <span className="text-gray-400">(May 2, Not Started)</span></div>
            <div>✔ Complete compliance training <span className="text-green-500">(Apr 23, Completed)</span></div>
            <div>✔ Update vendor risk profile <span className="text-green-500">(Apr 23, Completed)</span></div>
          </CardContent>
        </Card>

        {/* Alerts & Issues */}
        <Card>
          <CardTitle className="p-4 pb-0">Alerts & Issues</CardTitle>
          <CardContent className="p-4 space-y-2">
            <div className="text-red-600">● High-risk vulnerability detected <span className="text-gray-400">(29 min ago)</span></div>
            <div className="text-yellow-600">● Policy violation reported <span className="text-gray-400">(1 hr ago)</span></div>
            <div className="text-red-600">● New incident: Data breach <span className="text-gray-400">(3 hrs ago)</span></div>
            <div className="text-yellow-600">● Third-party risk assessment due <span className="text-gray-400">(5 hrs ago)</span></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
