export interface TimeshareResponse {
    timeshare_id:   number;
    date_start:     Date;
    date_end:       Date;
    nights:         number;
    price:          number;
    status:         boolean;
    name:           string;
    post_by:        number;
    destination_id: number;
}
