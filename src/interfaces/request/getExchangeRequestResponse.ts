export interface GetExchangeRequestResponse {
    create_date:           Date;
    status:                number;
    request_id:            string;
    response_by:           PostBy;
    request_by:            PostBy;
    timeshare_request_id:  TimeshareReID;
    timeshare_response_id: TimeshareReID;
    message:               string;
}

export interface PostBy {
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

export interface TimeshareReID {
    timeshareId:      string;
    timeshareName:    string;
    description:      string;
    status:           boolean;
    price:            number;
    nights:           number;
    postBy:           PostBy;
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