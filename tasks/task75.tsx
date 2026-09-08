



import React, { useState } from "react";

const someFunc = (num = 5) => {
  return Math.floor(Math.random() * num);
};

const LazyInit = ({ num }) => {
  const [count, setCount] = useState(someFunc(num));

  return (
    <>
      {count}
      <br />
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </>
  );
};

export default () => <LazyInit num={5} />;