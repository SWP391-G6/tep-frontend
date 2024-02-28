export interface VNPayRequest {
    adults:         string;
    children:       string;
    city:           string;
    country:        string;
    create_date:    Date;
    payment_status: number;
    postal_code:    string;
    state:          string;
    status:         number;
    street:         string;
    telephone:      string;
    total:          number;
    fullname:       string;
    payment_method: string;
    user_id:        string;
    timeshare_id:   string;
}
