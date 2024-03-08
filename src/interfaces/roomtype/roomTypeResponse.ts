export interface RoomTypeResponse {
    bath:         number;
    bed:          number;
    sleeps:       number;
    entertaiment: string;
    feature:      string;
    kitchen:      string;
    name:         string;
    policies:     string;
    roomview:     string;
    timeshareId:  string | null;
    roomtypeId:   string;
}
