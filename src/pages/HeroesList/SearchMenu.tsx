const alphabet: string[] = [];

for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}

type SearchMenuProps = {
  selectedLetter: string;
  onSelectLetter: (letter: string) => void;
};

const SearchMenu = ({ selectedLetter, onSelectLetter }: SearchMenuProps) => {
  return (
    <div className="flex justify-center gap-2 m-2">
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
