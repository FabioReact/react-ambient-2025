import { Link } from "react-router";

const Home = () => {
  return (
    <section>
      <h1>Arena: mix universe to find the greatest hero</h1>
      <Link to='/battle' className="button">Battle</Link>
    </section>
  );
};

export default Home;
