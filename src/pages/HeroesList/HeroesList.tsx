import { useState } from 'react';
import { Hero } from '../../types/hero';
import SearchMenu from './SearchMenu';
import HeroCard from '../../components/HeroCard';
import Loader from '../../components/Loader/Loader';

function HeroesList() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);


  return (
    <>
      <h1>Hello World</h1>
      <section>
        <SearchMenu updateHeroes={setHeroes} setLoading={setLoading} />
        <div className='flex flex-wrap justify-center gap-6'>
          {loading ? <Loader /> : heroes.map((hero) => <HeroCard hero={hero} key={hero.id} />)}
          {/* {loading && <Loader />}
          {!loading && heroes.map((hero) => <HeroCard hero={hero} key={hero.id} />)} */}
          {/* <Loader />
          {heroes.map((hero) => (
            <HeroCard hero={hero} key={hero.id} />
          ))} */}
        </div>
      </section>
    </>
  );
}

export default HeroesList;
