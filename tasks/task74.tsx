



import { useState } from 'react';

function Clicker() {
  const [clicks, setClicks] = useState(0);

  const onClick = () => {
    setTimeout(() => {
      setClicks(clicks + 1);
    }, 2000);
  };

  return (
    <>
      {clicks}
      <button onClick={onClick}>Increment</button>
    </>
  );
}

export default Clicker;