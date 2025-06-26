import React from "react";
import Navbar, { Sidebar } from "./Navbar";

const Budget_Planner = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-10 bg-white shadow">
          <Navbar heading="Budget-Planner" />
        </div>

        <main className="p-6 space-y-6">
          <p className="text-gray-600">Add Budget_Planner items here.</p>
        </main>
      </div>
    </div>
  );
};

export default Budget_Planner;
