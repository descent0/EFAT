import React from "react";
import { SafetyCard } from "./SafetyCard";
import { Navbar } from "./NavItem";
import { Footer } from "./FooterSection";
import { useSelector } from "react-redux";

const safetyLevels = [
  { title: "ECOSAFE", color: "bg-lime-500", position: "left" },
  { title: "VERY ECOSAFE", color: "bg-yellow-400", position: "center" },
  { title: "MODERATE ECOSAFE", color: "bg-indigo-700", position: "center" },
  { title: "NOT ECOSAFE", color: "bg-red-600", position: "right" },
];

const Result = () => {
  const safety = useSelector((state) => state.safety.safety);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-100 via-lime-200 to-green-300">
      <Navbar />
      <main className="flex-1 w-full px-3 py-2">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Environmental Safety Results
        </h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            {/* Safety Cards - Compact horizontal layout */}
            <div className="sm:w-1/3 flex flex-row sm:flex-col justify-center sm:justify-start gap-1">
              {safetyLevels.map((level, index) => (
                <div key={index} className="w-full">
                  <SafetyCard
                    title={level.title}
                    color={level.color}
                    position={level.position}
                  />
                </div>
              ))}
            </div>
            
            {/* Main Content - Highly compact */}
            <div className="sm:w-2/3 bg-white shadow-lg rounded-lg p-3">
              <h2 className="text-lg font-semibold text-gray-700 mb-1">
                Your Safety Level
              </h2>
              <div className="flex items-center justify-center w-full h-24 bg-gray-100 rounded-lg shadow-inner">
                <h1 className="text-3xl font-bold text-green-600">{safety}</h1>
              </div>
              <p className="mt-2 text-gray-600 text-xs sm:text-sm">
                Based on your input, the system has determined your environmental safety level. Take action to improve your eco-safety score!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Result;