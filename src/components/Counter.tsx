import React, {useState} from 'react'

interface Props {
    initialNumber: number;
}

export function Counter({initialNumber}:Props) {
  const [count, setCount] = useState(initialNumber);

  const handleClick = () => {
    setCount(count + 1);

  };

  return (
      <div>
          <p> You clicked {count} times</p>
          <button onClick={handleClick}>Click me</button>
      </div>
  );

}