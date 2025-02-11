import { useState } from 'react';
import SelectHero from './SelectHero';
import { fight } from '../../utils/fight';
import { Hero } from '../../types/hero';
import HeroCard from '../../components/HeroCard';

const Battle = () => {
  const [firstHero, setFirstHero] = useState<Hero | null>(null);
  const [secondHero, setSecondHero] = useState<Hero | null>(null);
  const [winner, setWinner] = useState<Hero | null>(null);

  const onFight = () => {
    if (firstHero && secondHero) {
      const result = fight(firstHero, secondHero);
      setWinner(result);
    }
  };

  const onReset = () => {
    setFirstHero(null);
    setSecondHero(null);
    setWinner(null);
  }

  return (
    <section className='w-6xl mx-auto max-w-full text-center'>
      <h1>Battle</h1>
      {winner ? (
        <div className='flex flex-col items-center'>
          <p>Victorious Hero:</p>
          <button onClick={onReset} className='button'>Reset</button>
          <HeroCard hero={winner} />
        </div>
      ) : (
        <>
          <div className='flex justify-center gap-8'>
            <SelectHero label='first' onSelectHero={setFirstHero} />
            <SelectHero label='second' onSelectHero={setSecondHero} />
          </div>
          {firstHero && secondHero && (
            <button className='button' onClick={onFight}>
              Start Battle
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default Battle;
