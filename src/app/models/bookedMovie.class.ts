//Modelo de los datos que se necesitan
export class BookedMovie {
  constructor(
    public bookingCode: string,
    public salaName: String,
    public salaCode: String,
    public schedule: String,
    public movieCode: String,
    public movieName: String,
    public ranking: Number
  ) {}
}
