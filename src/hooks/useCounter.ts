import { useState } from 'react';

const useCounter = (intialValue = 0) => {
  const [counter, setCounter] = useState(intialValue);

  const increment = () => {
    // Si la valeur future de mon compteur dépend de ma valeur actuelle, je dois passer par une fonction callback
    setCounter((c) => c + 1);
  };

  const decrement = () => {
    setCounter((c) => c - 1);
  };

  const addFive = () => {
    setCounter((c) => c + 5);
  };

  const multiplyByTwo = () => {
    setCounter((c) => c * 2);
  };

  const reset = () => {
    setCounter(intialValue);
  }

  return {
    counter,
    increment,
    decrement,
    addFive,
    multiplyByTwo,
    reset,
  };
};

export default useCounter;
