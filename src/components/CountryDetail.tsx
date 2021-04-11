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

export default function CountryDetail() {
  return <h1>3333</h1>;
}
