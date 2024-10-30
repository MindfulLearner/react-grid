import React from "react";
import "./App.css";

// tailwind css

function App() {
  return (
    <div className="App">
      <div className="mx-auto w-[1200px] h-[800px] mt-10 grid grid-cols-4 grid-rows-3">
        <div className="col-span-2 row-span-1">
          <div className="bg-red-500 h-full flex items-center justify-center font-bold text-white text-4xl">
            1
          </div>
        </div>
        <div className="col-span-2 row-span-1">
          <div className="bg-blue-500 h-full flex items-center justify-center font-bold text-white text-4xl">
            2
          </div>
        </div>

        <div className="col-span-3 row-span-1">
          <div className="bg-green-500 h-full flex items-center justify-center font-bold text-white text-4xl">
            3
          </div>
        </div>
        <div className="col-span-1 row-span-2">
          <div className="bg-yellow-500 h-full flex items-center justify-center font-bold text-white text-4xl">
            4
          </div>
        </div>
        <div className="col-span-3 row-span-1">
          <div className="bg-purple-500 h-full flex items-center justify-center font-bold text-white text-4xl">
            5
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
