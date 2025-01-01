import { useState } from "react";

const FuncComponent = () => {
  const [counter, setCounter] = useState(100);

  const handleCounter = (value) => {
    setCounter(counter + value);
  };

  return (
    <div className="counter">
      <h2>Func Component</h2>
      <p>
        <button onClick={() => handleCounter(-1)}>-</button>
        {counter}
        <button onClick={() => handleCounter(1)}>+</button>
      </p>
    </div>
  );
};

export default FuncComponent;
