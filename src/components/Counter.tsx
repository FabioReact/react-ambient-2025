import { useState } from 'react';

const Counter = () => {
  // Destructuration de tableau
  // string, number, boolean, null, undefined, array, object
  const [counter, setCounter] = useState(10);

  const increment = () => {
    setCounter((c) => c + 1); // 10 + 1 = 11
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
  // Si la valeur future de mon compteur dépend de ma valeur actuelle, je dois passer par une fonction callback

  return (
    <section>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
      <button onClick={addFive}>Ajouter 5</button>
      <button onClick={multiplyByTwo}>Multiplier par 2</button>
    </section>
  );
};

export default Counter;
