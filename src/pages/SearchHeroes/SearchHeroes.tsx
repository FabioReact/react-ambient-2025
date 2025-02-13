// intelligence, combat, durability, power, speed, strength,

import { getHeroesByFilters } from '@/api/heroes';
import HeroCard from '@/components/HeroCard';
import Loader from '@/components/Loader/Loader';
import Waiting from '@/components/Waiting/Waiting';
import { Hero } from '@/types/hero';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const apiCall = () => {
  new URLSearchParams({
    'powerstats.intelligence_gte': '50',
  });
};

type Inputs = {
  name: string;
  intelligence: string;
  combat: string;
  durability: string;
  power: string;
  speed: string;
  strength: string;
};

const stats = ['intelligence', 'combat', 'durability', 'power', 'speed', 'strength'];

const SearchHeroes = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);
  const [heroes, setHeroes] = useState<Hero[] | null>(null);

  const onSubmitHandler: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const result = await getHeroesByFilters(data);
    setHeroes(result);
    setLoading(false);
  };

  return (
    <section>
      <h1>Search Heroes</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset>
          <label htmlFor='hero-name'>Name:</label>
          <input type='text' id='hero-name' {...register('name')} />
        </fieldset>
        {stats.map((stat) => (
          <fieldset>
            <label htmlFor={stat} className='capitalize'>
              {stat}:
            </label>
            <input type='range' id={stat} defaultValue={1} {...register(stat as any)} />
          </fieldset>
        ))}
        <button>Search</button>
      </form>
      <Waiting loading={loading}>
        {heroes && (
          <div className='flex flex-wrap justify-center gap-6'>
            {heroes.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </div>
        )}
      </Waiting>
    </section>
  );
};

export default SearchHeroes;
