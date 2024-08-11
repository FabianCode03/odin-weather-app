export interface DateTime {
  datetime: string;
}

export interface Description {
  description: string;
}

export interface SunCycle {
  sunrise: string;
  sunset: string;
}

export interface Properties {
  conditions: string;
  icon: string;
  temp: number;
  humidity: number;
  precipprob: number;
  preciptype: string[] | null;
}

export interface Hour extends Properties, DateTime {}

export interface Day extends Properties, DateTime, Description, SunCycle {
  tempmax: number;
  tempmin: number;
  hours: Hour[];
}

export interface CurrentConditions extends Properties, DateTime, SunCycle {}

export interface WeatherData extends Description {
  resolvedAddress: string;
  days: Day[];
  currentConditions: CurrentConditions;
}
