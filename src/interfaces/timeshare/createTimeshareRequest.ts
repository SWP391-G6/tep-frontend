export interface CreateTimeshareRequest {
    date_start:     Date;
    date_end:       Date;
    price:          number;
    status:         boolean;
    name:           string;
    owner:          string;
    destination_id: string;
    description:    string;
    image_url:      string;
    city:           string;
    exchange:       boolean;
}
