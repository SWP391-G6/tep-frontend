export interface TimeshareResponse {
    timeshare_id:   number;
    date_start:     string;
    date_end:       string;
    nights:         number;
    price:          number;
    status:         boolean;
    address:        string;
    post_by:        number;
    destination_id: number;
    description:    string;
}
