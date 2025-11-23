import React from "react";

export function SafetyCard({ title, color, position }) {
  const isVeryEcoSafe = title === "VERY ECOSAFE";

  return (
    <div
      className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 ${color} ${
        isVeryEcoSafe ? "bg-opacity-100 border-4 border-green-700" : "bg-opacity-90"
      }`}
    >
      <div
        className={`flex items-center justify-center ${
          isVeryEcoSafe ? "h-28 w-28" : "h-20 w-20"
        } rounded-full bg-white shadow-inner`}
      >
        <h2
          className={`text-center font-bold ${
            isVeryEcoSafe ? "text-xl text-green-800" : "text-sm text-gray-800"
          }`}
        >
          {title}
        </h2>
      </div>
      <p
        className={`mt-4 text-xs text-gray-100 text-center ${
          position === "left"
            ? "self-start"
            : position === "right"
            ? "self-end"
            : "self-center"
        }`}
      >
        {position === "left"
          ? "Low Impact"
          : position === "right"
          ? "High Impact"
          : "Moderate Impact"}
      </p>
    </div>
  );
}