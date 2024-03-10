export interface BookingHistoryByUserIDResponse {
    booking_id:     string;
    bookingCode:    string;
    total:          number;
    success_date:   Date;
    status:         boolean;
    payment_status: boolean;
    adults:         number;
    children:       number;
    telephone:      string;
    fullname:       null;
    country:        string;
    street:         string;
    city:           string;
    state:          string;
    postal_code:    string;
    payment_method: null;
    user_id:        UserID;
    timeshare_id:   TimeshareID;
}

export interface TimeshareID {
    timeshareId:      string;
    timeshareName:    string;
    description:      string;
    status:           boolean;
    price:            number;
    nights:           number;
    postBy:           UserID;
    destinationModel: DestinationModel;
    dateStart:        Date;
    dateEnd:          Date;
    exchange:         boolean;
    city:             string;
    image_url:        string;
}

export interface DestinationModel {
    destinationId: string;
    address:       string;
    branch:        string;
    city:          string;
    country:       string;
    description:   string;
    desName:       string;
}

export interface UserID {
    user_id:   string;
    user_name: string;
    password:  string;
    fullname:  string;
    email:     string;
    phone:     string;
    dob:       Date;
    gender:    boolean;
    status:    boolean;
    role:      string;
}
