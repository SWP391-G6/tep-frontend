export interface VnpayBookingTimeshareRequest {
    adults:         string | "";
    children:       string | "";
    city:           string | "";
    country:        string | "";
    payment_status: boolean| false;
    postal_code:    string | "";
    state:          string | "";
    status:         boolean| false;
    street:         string | "";
    telephone:      string | "";
    total:          number | 0;
    fullname:       string | "";
    payment_method: string | "";
    user_id:        string | "";
    timeshare_id:   string | "";
}
