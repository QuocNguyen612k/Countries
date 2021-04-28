import { createContext } from "react";

export interface Languages {
  name: string;
}
export interface Currencies {
  code: string;
  name: string;
  symbol: string;
}

export interface Country {
  name: string;
  capital: string;
  population: number;
  flag: string;
  region: string;
  subregion: string;
  area: number;
  latlng: number[];
  languages: Languages[];
  timezones: string[];
  currencies: Currencies[];
  callingCodes: string[];
}

export const CountriesContext = createContext<Country[]>([]);
