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
        <form onSubmit={onSubmitHanlder}>
        <fieldset>
            <label htmlFor='firstHero'>Select First Hero</label>
            <input type='text' id='firstHero' ref={inputRef} minLength={2} />
        </fieldset>
        <button>Search</button>
        {heroes?.map((hero) => {
            return (
            <button onClick={() => setSelected(hero.name)} key={hero.id}>
                {hero.name}
            </button>
            );
        })}
        </form>
        <p>Tu as séléctionné: {selected}</p>
    </div>
  );
};

const Battle = () => {
  return (
    <section>
      <h1>Battle</h1>
      <SelectHero />
      {/* <SelectHero /> */}
    </section>
  );
};

export default Battle;
