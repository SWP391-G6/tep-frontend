export interface TimeshareResponse {
    timeshare_id:   string;
    date_start:     Date;
    date_end:       Date;
    nights:         number;
    price:          number;
    status:         boolean;
    name:           string;
    post_by:        string;
    destination_id: Destination;
    description:    string;
    image_url:      string;
    city:           string;
    room:           RoomType;
}

export interface Destination {
    destinationId:  string;
    address:        string;
    branch:         string;
    city:           string;
    description:    string;
    name:           string;
    country:        string;
}

export interface RoomType {
    roomtypeId:     string;
    roomview:       string;
    policies:       string;
    name:           string;
    kitchen:        string;
    feature:        string;
    entertaiment:   string;
    bath:           number,
    bed:            number,
    sleeps:         number,
    
}

