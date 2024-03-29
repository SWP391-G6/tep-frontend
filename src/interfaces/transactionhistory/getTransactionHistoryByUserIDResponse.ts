export interface GetTransactionHistoryByUserIDResponse {
    transaction_id:   string;
    transaction_fee:  number;
    transaction_time: Date;
    service_id:       ServiceID;
    user_id:          UserID;
    transaction_code: string;
    expireDate:       Date;
}

export interface ServiceID {
    service_id:    string;
    ad_duration:   number;
    allow_post:    boolean;
    flag:          boolean;
    name:          string;
    priority:      boolean;
    service_code:  string;
    service_price: number;
}

export interface UserID {
    user_id:    string;
    user_name:  string;
    fullname:   string;
    email:      string;
    createDate: Date;
    phone:      string;
    dob:        Date;
    gender:     boolean;
    status:     boolean;
    role:       string;
}
