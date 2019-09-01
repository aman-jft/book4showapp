
export class MovieSchedule {
    id:number;
    movieTheatreId: number;
    movie: number;
    movieName: string;
    movieDuration: string;
    timeSlot: string;
    from: Date;
    to: Date;
    price: number;
    deleted: boolean;
}