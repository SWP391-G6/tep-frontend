export interface CreateRoomTypeRequest {
    name:          string;
    sleeps:        number;
    room_view:     string;
    bed:           number;
    bath:          number;
    kitchen:       string;
    entertaiment: string;
    features:      string;
    policies:      string;
    timeshareId:  string;
}
