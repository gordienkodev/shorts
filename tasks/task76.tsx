



import React, { useEffect, useLayoutEffect, useState } from "react";

const Effects = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => console.log("each render 1"));

  console.log("each render 2");

  useEffect(() => console.log("each render 3"));

  return (
    <>
      {count}
      <button onClick={() => setCount((prevProps) => ++prevProps)}>
        Increment
      </button>
    </>
  );
};

export default Effects;

// 1 рендер:
// После клика: