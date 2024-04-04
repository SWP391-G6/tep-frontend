import dayjs from "dayjs";

export interface RegisterRequest {
    user_name: string;
    password:  string;
    fullname:  string;
    email:     string;
    phone:     string;
    dob:       string;
    gender:    number;
}
