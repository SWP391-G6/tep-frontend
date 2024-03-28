import dayjs from "dayjs";

export interface CreateTimeshareRequest {
  date_start: dayjs.Dayjs;
  date_end: dayjs.Dayjs;
  price: number;
  status: boolean;
  name: string;
  owner: string;
  destination_id: string;
  description: string;
  image_url: string;
  city: string;
  exchange: boolean;
}
