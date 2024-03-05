export interface TimeshareByOwnerResponse {
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
    isSelected:       boolean;
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
export interface TimeshareByOwnerResponse {
    timeshareId:    string;
    timeshareName:  string;
    date_start:     Date;
    date_end:       Date;
    nights:         number;
    price:          number;
    status:         boolean;
    post_by:        Owner;
    destinationModel:Destination;
    description:    string;
    exchange:       boolean;
}

export interface Destination {
    destinationId:  string;
    address:        string;
    branch:         string;
    city:           string;
    description:    string;
    country:        string;
    desName:        string;
}

export interface Owner {
    user_id:        string;
    user_name:      string;
    password:       string;
    fullname:       string;
    email:          string;
    dob:            Date;
    status:         boolean;
    phone:          string,
    gender:         boolean,
    role:           string,
    
}

