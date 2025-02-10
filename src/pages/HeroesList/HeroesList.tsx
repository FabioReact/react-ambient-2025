import { useState } from 'react';
import { Hero } from '../../types/hero';
import SearchMenu from './SearchMenu';
import HeroCard from '../../components/HeroCard';

function HeroesList() {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  return (
    <>
      <h1>Hello World</h1>
      <section>
        <SearchMenu updateHeroes={setHeroes} />
        <div>
          {heroes.map((hero) => (
            <HeroCard hero={hero} key={hero.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default HeroesList;
