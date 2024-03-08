export interface MyBookingResponse {
    booking_id: string;
    bookingCode: string;
    total: number;
    success_date: string;
    status: boolean;
    payment_status: boolean;
    adults: number;
    children: number;
    telephone: string;
    fullname: string;
    country: string;
    street: string;
    city: string;
    state: string;
    postal_code: string;
    payment_method: string;
    user_id: User;
    timeshare_id: Timeshare;
    dateStart: string;
    dateEnd: string;
    exchange: boolean;
}

export interface User {
    user_id: string;
    user_name: string;
    password: string;
    fullname: string;
    email: string;
    phone: string;
    dob: Date;
    gender: boolean,
    status: boolean,
    role: string;
}

export interface Timeshare {
    timeshareId: string;
    timeshareName: string;
    description: string;
    status: boolean;
    price: number;
    nights: number;
    postBy: User;
    destinationModel: Destination,
    dateStart: string;
    dateEnd: string;
}

export interface Destination {
    destinationId: string;
    address: string;
    branch: string;
    city: string;
    country: string;
    description: string;
    desName: string;
}