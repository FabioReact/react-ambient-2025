import axios from 'axios';
import { Hero } from '../types/hero';

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

export const getHeroesByFilters = async (filters: {
  name: string;
  intelligence: string;
  combat: string;
  durability: string;
  power: string;
  speed: string;
  strength: string;
}): Promise<Hero[]> => {
  const { name, intelligence, combat, durability, power, speed, strength } = filters;
  const params = new URLSearchParams({
    name_like: name,
    'powerstats.intelligence_gte': intelligence,
    'powerstats.combat_gte': combat,
    'powerstats.durability_gte': durability,
    'powerstats.power_gte': power,
    'powerstats.speed_gte': speed,
    'powerstats.strength_gte': strength,
  });
  const response = await axios.get(`http://localhost:4000/heroes?${params}`);
  return response.data;
};
