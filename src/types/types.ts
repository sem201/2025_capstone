// @ts-ignore
export interface LogType {
  emergency: boolean;
  problem: string;
  name: string;
  locate: string;
  time: string;
}

export interface UserLocation {
  patientId: string;
  id: string;
  name: string;
  place: string;
  ssid: string;
  floor: number;
  x: number;
  y: number;
  type: "active" | "delete" | "emergency" | "help";
}

export interface LogData {
  patientName: string;
  time: string;
  updatedAt: string;
  reason?: string;
}
