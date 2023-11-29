import { Location } from "./location";
export interface Character {
  id: string;
  name: string;
  image: string;
  location?: Location;
}
export type Characters = Character[];


