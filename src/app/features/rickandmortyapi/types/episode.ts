import { Characters } from "./character";

export interface Episode {
  id: string;
  name: string;
  episode: string;
  characters?: Characters;
}
export type Episodes = Episode[];
