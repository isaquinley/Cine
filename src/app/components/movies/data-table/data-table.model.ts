//Modelo de los datos que se necesitan
export class Movie {
  constructor(
      public code: string,
      public name: string,
      public description: string,
      public image: string,
      public duration: String,
      public type: String
  ) { }
}
