import Ajv from 'ajv';
import schema from '../schema/weatherDataSchema.json';

const ajv = new Ajv({ allErrors: true });

export const isValidWeatherData = ajv.compile(schema);
