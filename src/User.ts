import faker, { fake } from "faker";
import { Mappable } from "./CustomMap";
export const red = "red";

export class User implements Mappable {
  //define properties
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "blue";

  //for initalization
  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  mapperContent(): string {
    return `User Name: ${this.name}`;
  }
}
