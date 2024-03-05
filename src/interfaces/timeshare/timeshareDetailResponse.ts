export interface TimeshareDetailResponse {
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
