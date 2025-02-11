import { useState, useRef } from 'react';
import { getHeroesByName } from '../../api/heroes';
import { Hero } from '../../types/hero';
import HeroCard from '../../components/HeroCard';

const SelectHero = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [heroes, setHeroes] = useState<Hero[] | null>(null);
  const [selected, setSelected] = useState<Hero | null>(null);

  const onSubmitHanlder = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = await getHeroesByName(inputRef.current!.value);
    setHeroes(data);
  };

  const onResetHandler = () => {
    setHeroes(null);
    setSelected(null);
  };

  return (
    <div>
      {!selected && (
        <form onSubmit={onSubmitHanlder} className='w-48 max-w-full'>
          <fieldset className='flex flex-col'>
            <label htmlFor='firstHero'>Select First Hero</label>
            <input type='text' id='firstHero' ref={inputRef} minLength={2} className='border-b' />
          </fieldset>
          <button className='button' type='submit'>
            Search
          </button>
          <div className='flex flex-col gap-1'>
            {heroes?.map((hero) => (
              <button
                className='border border-black rounded px-2 py-1 hover:bg-gray-200'
                onClick={() => setSelected(hero)}
                key={hero.id}
              >
                <span className='text-gray-700'>#{hero.id}</span> - {hero.name}
              </button>
            ))}
          </div>
        </form>
      )}
      {selected && (
        <>
          <HeroCard hero={selected} />
          <button className='button' onClick={onResetHandler}>
            Reset Choice
          </button>
        </>
      )}
    </div>
  );
};

const Battle = () => {
  return (
    <section className='w-6xl mx-auto max-w-full'>
      <h1>Battle</h1>
      <SelectHero />
    </section>
  );
};

export default Battle;
