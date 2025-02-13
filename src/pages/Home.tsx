import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment, incrementByAmount } from "@/redux/reducers/counterSlice";
import { Link } from "react-router";

const Home = () => {
  const counterValue = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <section>
      <h1>Arena: mix universe to find the greatest hero</h1>
      <p>Counter: {counterValue}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      <Link to='/battle' className="button">Battle</Link>
    </section>
  );
};

export default Home;
