export interface Date {
  date: string;
}

export interface Time {
  time: string;
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

export interface Hour extends Properties, Time {}

export interface Day extends Properties, Date, Description, SunCycle {
  tempMax: number;
  tempMin: number;
  hours: Hour[];
}

export interface CurrentConditions extends Properties, Time, SunCycle {}

export type WeatherData = {
  resolvedAddress: string;
  description: string;
  days: Day[];
  currentConditions: CurrentConditions;
};
