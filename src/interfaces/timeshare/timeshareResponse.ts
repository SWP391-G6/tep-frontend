export interface TimeshareResponse {
    timeshare_id:   string;
    date_start:     Date;
    date_end:       Date;
    nights:         number;
    price:          number;
    status:         boolean;
    name:           string;
    post_by:        string;
    destination_id: string;
    description:    string;
    image_url:      string;
    city:           string;
}
