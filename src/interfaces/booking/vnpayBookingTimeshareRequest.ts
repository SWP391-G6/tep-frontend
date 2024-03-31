export interface VnpayBookingTimeshareRequest {
    adults:         string ;
    children:       string ;
    city:           string ;
    country:        string ;
    payment_status: boolean;
    postal_code:    string ;
    state:          string ;
    status:         boolean;
    street:         string ;
    telephone:      string ;
    total:          number ;
    full_name:       string ;
    payment_method: string ;
    user_id:        string ;
    timeshare_id:   string ;
}
