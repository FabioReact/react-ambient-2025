import { useEffect, useRef, useState } from 'react';

const LearnUseEffect = () => {
  const [darkMode, setDarkMode] = useState(false);
  const isFirstRender = useRef(true)

  useEffect(() => {
    console.log('Inside useEffect - Empty dependency array'); // Après le premier chargement de page
    return () => {
      console.log('Return useEffect - Empty dependency array'); // Avant que le composant ne disparaisse de l'UI
    };
  }, []);

  useEffect(() => {
    console.log('Inside useEffect - darkMode in the dependency array'); // Après le premier chargement de page, et après chaque mise à jour de "darkMode"
    if (!isFirstRender) {
      console.log('Uniquement lors des mise à jour');
    }
    isFirstRender.current = false;
    return () => {
      console.log('Return useEffect - darkMode in the dependency array'); // Avant que le composant ne disparaisse de l'UI, et avant que darkMode ne soit mis à jour
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
