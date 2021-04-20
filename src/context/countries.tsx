import { createContext } from "react";

interface Languages {
  name: string;
}

export interface Country {
  name: string;
  capital: string;
  population: number;
  flag: string;
  languages: Languages[];
}

export const CountriesContext = createContext<Country[]>([]);
