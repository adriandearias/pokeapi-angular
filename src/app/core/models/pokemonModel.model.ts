export class PokemonModel {
    id: number;
    name: string;
    type: string;
    imageUrl: string;
    abilities: string[];
    
    constructor(id: number, name: string, type: string, imageUrl: string, abilities: string[]) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.imageUrl = imageUrl;
      this.abilities = abilities;
    }
  }