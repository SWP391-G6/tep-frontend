export interface TimeshareDetailResponse {
    timeshare_id: string;
    address:      null;
    date_end:     Date;
    date_start:   Date;
    description:  string;
    exchance:     boolean;
    image_url:    string;
    name:         string;
    nights:       number;
    price:        number;
    status:       boolean;
    city:         null;
    post_by:      string;
    des:          DES;
    room:         Room;
}

export interface DES {
    destinationId: string;
    address:       string;
    branch:        string;
    city:          string;
    description:   string;
    name:          string;
    country:       string;
}

export interface Room {
    bath:         number;
    bed:          number;
    sleeps:       number;
    entertaiment: string;
    feature:      string;
    kitchen:      string;
    name:         string;
    policies:     string;
    roomview:     string;
    roomtypeId:   string;
}
