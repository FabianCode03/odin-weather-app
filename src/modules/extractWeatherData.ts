// TODO: extract interfaces and types in separate files

interface Properties {
  conditions: string;
  description: string;
  icon: string;
  temp: number;
  humidity: number;
  precipprob: number;
  preciptype: string[];
}

interface Hour extends Properties {
  // no description available
  time: string;
}

interface Day extends Properties {
  date: string;
  tempMax: number;
  tempMin: number;
  sunrise: string;
  sunset: string;
  hours: Hour[];
}

type WeatherData = {
  resolvedAddress: string;
  description: string;
  days: Day[];
  currentConditions: Properties[]; // needs to be checked further
};

export async function extractWeatherData(json: any) {}
