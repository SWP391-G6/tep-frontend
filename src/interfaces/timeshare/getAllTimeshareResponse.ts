export interface GetAllTimeshareResponse {
    timeshare_id:   string;
    date_start:     Date;
    date_end:       Date;
    nights:         number;
    price:          number;
    status:         boolean;
    timeshare_code: null;
    name:           string;
    owner:          string;
    destination_id: string;
    description:    string;
    image_url:      string;
    city:           string;
    exchange:       boolean;
    create_date:    null;
}
