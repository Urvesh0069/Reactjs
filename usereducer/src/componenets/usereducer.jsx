import { useReducer } from "react";

const States = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      {return state > 0 ? state - 1 : 0;} 
    case "reset":
      return 0;
    default:
      throw new Error("Unknown action");
  }
};

const Reducer = () => {
  const [count, dispatch] = useReducer(States, 0);

  return (
    <div className="mx-auto max-w-2xl p-4 border border-gray-200 rounded-lg shadow-md mt-5 bg-green-300 text-center">
      <h1 className="m-2">Counter with Number</h1>
      <h1 className="text-2xl">Value: {count}</h1>

      <button
        onClick={() => dispatch({ type: "increment" })}
        className="bg-red-300 p-2 rounded-2xl shadow-2xl m-5"
      >
        + increment
      </button>

      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="bg-blue-300 p-2 rounded-2xl shadow-2xl m-5"
      >
        - decrement
      </button>

      <button
        onClick={() => dispatch({ type: "reset" })}
        className="bg-yellow-300 p-2 rounded-2xl shadow-2xl m-5"
      >
        0 = reset
      </button>
    </div>
  );
};

export default Reducer;
