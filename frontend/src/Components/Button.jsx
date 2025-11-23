import * as React from "react";

function Button({ children }) {
  return (
    <button 
      type="submit"
      className="overflow-hidden gap-2.5 self-center p-4 mt-5 ml-11 max-w-full text-3xl font-semibold text-teal-600 rounded-2xl border-2 border-cyan-700 border-solid min-h-[71px] w-[172px]"
    >
      {children}
    </button>
  );
}

export default Button;