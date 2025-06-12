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
  patientId: string;
  id: string;
  patientName: string;
  time: string;
  updatedAt: string;
  name?: string;
  reason?: string;
  patientLocatedInfo: {
    place: string;
    x: number;
    y: number;
    floor: string;
    ssid: string;
  };
}

export interface EmergencyEvent {
  patientId: number;
  name: string;
  locatedInfo: {
    place: string;
  };
  emergencyId: number;
  createAt: string;
  type: "emergency" | "help";
}
