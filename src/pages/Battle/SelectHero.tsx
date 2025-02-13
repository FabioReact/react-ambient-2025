import { useState, useRef } from 'react';
import { getHeroesByName } from '../../api/heroes';
import { Hero } from '../../types/hero';
import HeroCard from '../../components/HeroCard';
import { useLazyGetHeroesByNameQuery } from '@/redux/services/heroes';

type SelectHeroProps = {
  label: string;
  onSelectHero: (data?: any) => void;
};

const SelectHero = ({ label, onSelectHero }: SelectHeroProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // const [heroes, setHeroes] = useState<Hero[] | null>(null);
  const [selected, setSelected] = useState<Hero | null>(null);
  const [getHeroesByName, { isSuccess, data: heroes, isError, error, isFetching, reset }] = useLazyGetHeroesByNameQuery();


  const onSubmitHanlder = async (event: React.FormEvent) => {
    event.preventDefault();
    getHeroesByName(inputRef.current!.value);
    // setHeroes(data);
  };

  const onClickHandler = (hero: Hero) => {
    setSelected(hero);
    onSelectHero(hero);
  }

  const onResetHandler = () => {
    // setHeroes(null);
    reset();
    setSelected(null);
  };

  return (
    <div>
      {!selected && (
        <form onSubmit={onSubmitHanlder} className='w-48 max-w-full'>
          <fieldset className='flex flex-col'>
            <label className='capitalize' htmlFor={label}>
              Select {label} Hero
            </label>
            <input type='text' id={label} ref={inputRef} minLength={2} className='border-b' />
          </fieldset>
          <button className='button' type='submit'>
            Search
          </button>
          <div className='flex flex-col gap-1'>
            {heroes?.map((hero) => (
              <button
                className='border border-black rounded px-2 py-1 hover:bg-gray-200'
                onClick={() => onClickHandler(hero)}
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

export default SelectHero;
