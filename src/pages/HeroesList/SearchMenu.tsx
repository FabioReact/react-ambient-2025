import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getHeroesByFirstLetter } from '../../api/heroes';
import { Hero } from '../../types/hero';

const alphabet: string[] = [];

for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}

type SearchMenuProps = {
  updateHeroes: Dispatch<SetStateAction<Hero[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const SearchMenu = ({ updateHeroes, setLoading }: SearchMenuProps) => {
  const [selectedLetter, setSelectedLetter] = useState('A');

  useEffect(() => {
    getHeroesByFirstLetter(selectedLetter).then((data) => {
      updateHeroes(data);
      // stop loading
      setLoading(false);
    });
  }, []);

  const onSelectLetter = (letter: string) => {
    setSelectedLetter(letter);
    setLoading(true);
    getHeroesByFirstLetter(letter).then((data) => {
      updateHeroes(data);
      // stop loading
      setLoading(false);
    });
  };

  return (
    <div>
      {alphabet.map((letter) => (
        <button
          key={letter}
          style={{
            color: selectedLetter === letter ? 'red' : 'black',
          }}
          onClick={() => onSelectLetter(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default SearchMenu;
