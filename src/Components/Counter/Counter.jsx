import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const toggleShowCount = () => {
    setShowCount((prevShowCount) => !prevShowCount);
  };

  return (
    <div className="pg bg-secondary d-flex align-items-center" style={{ minHeight: "100vh" }}>
    <div className="container">
      <h1 className="text-center text-black">Counter</h1>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-primary mx-2" onClick={increment}>
          Increase
        </button>
        <span className="mx-3">{count}</span>
        <button className="btn btn-primary mx-2" onClick={decrement}>
          Decrease
        </button>
      </div>
      <div className="text-center mt-3">
        {showCount && (
          <h4 className="text-center">You have clicked {count} times</h4>
        )}
        <button onClick={toggleShowCount} className="btn btn-primary">
          {showCount ? "Hide Count" : "Show Count"}
        </button>
      </div>
    </div>
  </div>
  );
};

export default Counter;
