import { createContext } from "react";

interface Languages {
  name: string;
}

export interface Country {
  name: string;
  capitals: string;
  population: number;
  flag: string;
  languages: Languages[];
}

export const CountriesContext = createContext<Country[]>([]);
