//Modelo de los datos que se necesitan
export class User {
  constructor(
    public cedula: Number,
    public name: String,
    public isAdmin: Boolean,
    public email: String,
    public password: String
  ) {}
}
