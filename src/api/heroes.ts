export const getHeroesByFirstLetter = (letter: string) => {
  return fetch(`http://localhost:4000/heroes?name_like=^${letter}`).then((res) => res.json());
};
