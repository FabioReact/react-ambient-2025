import { useEffect, useState } from 'react';
import { Hero } from '../types/hero';
import { getHeroesByFirstLetter } from '../api/heroes';

const useGetHeroesByFirstLetter = (selectedLetter: string) => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getHeroesByFirstLetter(selectedLetter)
      .then((data) => {
        setHeroes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const refetch = (letter: string) => {
    setLoading(true);
    setError('');
    getHeroesByFirstLetter(letter)
      .then((data) => {
        setHeroes(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    heroes,
    loading,
    error,
    refetch,
  };
};

export default useGetHeroesByFirstLetter;
