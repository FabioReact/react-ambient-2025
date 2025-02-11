import { Hero } from "../types/hero";

export const getHeroesByFirstLetter = (letter: string): Promise<Hero[]> => {
  return fetch(`http://localhost:4000/heroes?name_like=^${letter}`)
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      throw new Error('Unexpected error');
    });
};

export const getHeroesByName = async (name: string): Promise<Hero[]> => {
  const response = await fetch(`http://localhost:4000/heroes?name_like=${name}`);
  const data = await response.json();
  return data;
};
