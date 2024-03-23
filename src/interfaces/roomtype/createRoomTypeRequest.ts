export interface CreateRoomTypeRequest {
    name:          string;
    sleeps:        number;
    room_view:     string;
    bed:           number;
    bath:          number;
    kitchen:       string;
    entertainment: string;
    features:      string;
    policies:      string;
    timeshare_id:  string;
}
