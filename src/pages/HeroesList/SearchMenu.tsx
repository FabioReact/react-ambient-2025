import { Dispatch, SetStateAction, useState } from 'react';
import { getHeroesByFirstLetter } from '../../api/heroes';
import { Hero } from '../../types/hero';

const alphabet: string[] = [];

for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}

type SearchMenuProps = {
  updateHeroes: Dispatch<SetStateAction<Hero[]>>;
};

const SearchMenu = ({ updateHeroes }: SearchMenuProps) => {
  const [selectedLetter, setSelectedLetter] = useState('A');

  const selectLetter = (letter: string) => {
    setSelectedLetter(letter);
    getHeroesByFirstLetter(letter).then((data) => {
        updateHeroes(data);
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
          onClick={() => selectLetter(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default SearchMenu;
