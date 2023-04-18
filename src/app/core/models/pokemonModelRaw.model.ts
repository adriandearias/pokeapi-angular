export interface PokemonModelRaw {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other: {
      official_artwork: {
        front_default: string;
      };
      dream_world: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
}
