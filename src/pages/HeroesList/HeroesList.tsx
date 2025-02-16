import { useState } from 'react';
import SearchMenu from './SearchMenu';
import HeroCard from '../../components/HeroCard';
import Loader from '../../components/Loader/Loader';
import useGetHeroesByFirstLetter from '../../hooks/useGetHeroesByFirstLetter';
import Waiting from '@/components/Waiting/Waiting';

function HeroesList() {
  const [selectedLetter, setSelectedLetter] = useState('A');
  const { heroes, loading, error, refetch } = useGetHeroesByFirstLetter('A');

  const onSelectLetter = (letter: string) => {
    setSelectedLetter(letter);
    refetch(letter);
  };

  return (
    <>
      <h1>Hello World</h1>
      <section>
        <SearchMenu onSelectLetter={onSelectLetter} selectedLetter={selectedLetter} />
        <div className='flex flex-wrap justify-center gap-6'>
          {error && <p className='text-red-600'>Erreur: {error}</p>}
          {!error && (
            <Waiting loading={loading}>
              {heroes.map((hero) => (
                <HeroCard hero={hero} key={hero.id} />
              ))}
            </Waiting>
          )}
        </div>
      </section>
    </>
  );
}

export default HeroesList;
