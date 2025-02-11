import useCounter from '../hooks/useCounter';

const Counter = () => {
  const { counter, increment, decrement, addFive, multiplyByTwo, reset } = useCounter(5);

  return (
    <section>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
      <button onClick={addFive}>Ajouter 5</button>
      <button onClick={multiplyByTwo}>Multiplier par 2</button>
      <button onClick={reset}>Reset</button>
    </section>
  );
};

export default Counter;
