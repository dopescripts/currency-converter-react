import { useState } from "react";
import { InputBox } from "./components";
import { RefreshCcw } from "lucide-react";
function App() {
  const bgImage = "https://images.unsplash.com/photo-1511883040705-6011fad9edfc?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-2 w-screen min-h-80 md:h-screen overflow-hidden bg-gray-950">
        <div className="relative">
          <img src={bgImage} className="w-full h-full object-cover object-center" />
          <div className="absolute h-full w-full inset-0 bg-black/50 z-10 flex flex-col items-center justify-center">
            <div className="bg-blue-900/50 py-3 px-6 rounded-xl text-gray-100 text-2xl md:text-4xl font-medium font-mono">$ Currency Converter</div>
          </div>
          <div className="absolute inset-x-0 bottom-5 z-10 text-center">
            <a href="https://github.com/dopescripts" target="_blank" className="text-sm font-medium text-gray-400">
              github:dopescripts
            </a>
          </div>
        </div>
        <div className="w-full m-auto">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-blue-800/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="w-full mb-1">
                <InputBox label="From" />
              </div>
              <div className="relative w-full h-0.5">
                <button type="button" className="absolute left-1/2 cursor-pointer -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox label="To" />
              </div>
              <button type="submit" className="w-full group flex items-center justify-center gap-1 relative cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg">
                Convert
                <span>
                  <RefreshCcw strokeWidth={2} size={16} className="group-hover:animate-spin" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
