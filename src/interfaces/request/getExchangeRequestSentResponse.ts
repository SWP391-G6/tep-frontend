export interface GetExchangeRequestSentResponse {
    create_date:           Date;
    status:                number;
    request_id:            string;
    response_by:           By;
    request_by:            By;
    timeshare_request_id:  TimeshareReID;
    timeshare_response_id: TimeshareReID;
    message:               string;
    request_code:          string;
}

export interface By {
    user_id:    string;
    user_name:  string;
    fullname:   string;
    email:      string;
    createDate: Date;
    phone:      string;
    dob:        Date;
    gender:     boolean;
    status:     boolean;
    role:       string;
}

export interface TimeshareReID {
    timeshareId:      string;
    timeshareCode:    string;
    timeshareName:    string;
    description:      string;
    status:           boolean;
    price:            number;
    nights:           number;
    postBy:           By;
    destinationModel: DestinationModel;
    dateStart:        Date;
    dateEnd:          Date;
    exchange:         boolean;
    city:             string;
    image_url:        string;
    create_date:      Date;
    tempOwner:        string;
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
