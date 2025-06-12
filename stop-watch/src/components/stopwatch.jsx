import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(false);

  useEffect(() => {
    let num;
    if (run) {
      num = setInterval(() => {
        setCount((number) => number + 1);
      }, 100);
    }
    return () => clearInterval(num);
  }, [run]);

  const start = () => setRun(true);
  const stop = () => setRun(false);
  const restart = () => {
    setRun(false);
    setCount(0);
  };

  return (
      <div className="flex flex-col border-black-200 border-2 w-160 h-140 mx-auto items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Stopwatch</h1>
      <h2 className="text-4xl font-mono mb-6 text-gray-800">
        {count }
      </h2>
      <div className="space-x-4">
        <button
          onClick={start}
          className="px-6 py-2 bg-green-800 text-white rounded"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="px-6 py-2 bg-red-800 text-white rounded"
        >
          Stop
        </button>
        <button
          onClick={restart}
          className="px-6 py-2 bg-yellow-500 text-white rounded"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
