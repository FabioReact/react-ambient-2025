import { useState } from 'react';
import Counter from './components/Counter';

const alphabet: string[] = [];

for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}
// npm install -D json-server@0.17.4
function App() {

  const [selectedLetter, setSelectedLetter] = useState('A');

  const selectLetter = (letter: string) => {
    setSelectedLetter(letter);
  };

  return (
    <>
      <h1>Hello World</h1>
      <Counter />
      <Counter />
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
      </section>
    </>
  );
}

export default App;
