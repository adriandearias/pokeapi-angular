export interface PokemonModelRaw {
  id: number;
  name: string;
  sprites: {
    front_default: string,
    back_default: string;
    other: {
      official_artwork: {
        front_default: string;
      };
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    }
  }
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
  height: number;
  weight: number;
}
