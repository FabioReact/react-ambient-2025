import { useState } from 'react';
import { Hero } from './types/hero';
import { getHeroesByFirstLetter } from './api/heroes';

const alphabet: string[] = [];

for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}

// Fonction pure:
// Pas d'effet de bord (no side effect)
// Input donné, toujours le même output en sortie
// Math.random()

function App() {
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [heroes, setHeroes] = useState<Hero[]>([]);

  const selectLetter = (letter: string) => {
    setSelectedLetter(letter);
    getHeroesByFirstLetter(letter).then((data) => {
      setHeroes(data);
    });
  };

  return (
    <>
      <h1>Hello World</h1>
      <section>
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
        <div>
          {heroes.map((hero) => (
            <span key={hero.id}>{hero.name}</span>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
