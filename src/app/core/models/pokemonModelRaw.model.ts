export interface PokemonModelRaw {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
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
  }