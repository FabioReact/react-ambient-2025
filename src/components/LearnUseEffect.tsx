import { useEffect, useState } from 'react';

const LearnUseEffect = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log('Inside useEffect - Empty dependency array');
    return () => {
      console.log('Return useEffect - Empty dependency array');
    };
  }, []);

  useEffect(() => {
    console.log('Inside useEffect - darkMode in the dependency array');
    return () => {
      console.log('Return useEffect - darkMode in the dependency array');
    };
  }, [darkMode]);

  console.log('Outside useEffect');
  // Pas d'effet de bord donc pas d'appel HTTP

  const togglDarkMode = () => {
    // If darkMode is true, next state should be false
    // If darkMode is false, next state should be true
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <section
      style={{
        backgroundColor: darkMode ? 'darkblue' : 'white',
        color: darkMode ? '#eee' : 'black',
      }}
    >
      <h2>Learn UseEffect Hook</h2>
      <button onClick={togglDarkMode}>Toggle Dark Mode</button>
    </section>
  );
};

export default LearnUseEffect;
