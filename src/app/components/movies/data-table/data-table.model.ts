//Modelo de los datos que se necesitan
export class Movie {
  constructor(
      public code: string,
      public Name: string,
      public Description: string,
      public Image: string,
      public duration: String,
      public type: String
  ) { }
}
