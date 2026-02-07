class SeatAssignment {
    // A1, A2, ...
    // Michal, John, ...
    // Index signature property
    [seatNumber: string]:string;
}

let seats = new SeatAssignment();
seats.A1 = 'Michal';
// seats['A1'] = 'Michal';
seats.A2 = 'John';