// @ts-ignore
export interface LogType {
  emergency: boolean;
  problem: string;
  name: string;
  locate: string;
  time: string;
}

export interface UserLocation {
  id: string;
  name: string;
  place: string;
  ssid: string;
  x: number;
  y: number;
  type: "active" | "delete";
}
