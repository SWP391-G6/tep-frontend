export interface MyRequestResponse {
    request_id: string;
    status: string;
    request_by: User;
    response_by: User;
    create_date: string;
    timeshare_id: Timeshare;
    message: string;
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
    dateStart: string,
    dateEnd:string,
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