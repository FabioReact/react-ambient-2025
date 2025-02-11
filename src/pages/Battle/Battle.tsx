import { useState, useRef } from 'react';
import { getHeroesByName } from '../../api/heroes';
import { Hero } from '../../types/hero';

const SelectHero = () => {
  //   const [firstHero, setFirstHero] = useState('super');
  const inputRef = useRef<HTMLInputElement>(null);
  const [heroes, setHeroes] = useState<Hero[] | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const onSubmitHanlder = async (event: React.FormEvent) => {
    event.preventDefault();
    // setFirstHero(inputRef.current!.value);
    const data = await getHeroesByName(inputRef.current!.value);
    setHeroes(data);
  };

  //   1. But: Si on n'a pas selectionné de Hero, alors ne pas afficher "Tu as séléctionné: "
  //   2. Si un hero est sélectionné, ne plus afficher le formulaire
  //   3. Avoir un bouton "Reset" pour annuler la selection et afficher de nouveau le formulaire
  //   4. Afficher la HeroCard (composant) au lieu de "Tu as séléctionné: Hulk"

  return (
    <div>
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
              onClick={() => setSelected(hero.name)}
              key={hero.id}
            >
              <span className='text-gray-700'>#{hero.id}</span> - {hero.name}
            </button>
          ))}
        </div>
      </form>
      <p>Tu as séléctionné: {selected}</p>
    </div>
  );
};

const Battle = () => {
  return (
    <section className='w-6xl mx-auto max-w-full'>
      <h1>Battle</h1>
      <SelectHero />
      {/* <SelectHero /> */}
    </section>
  );
};

export default Battle;
