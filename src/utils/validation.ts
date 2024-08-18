// type: is a function -> returns a boolean
type Validator = (value: any) => boolean;

const isStringArray: Validator = (value) => Array.isArray(value) && value.every((item) => typeof item === 'string');

export const isString: Validator = (value) => typeof value === 'string';

export const isNumber: Validator = (value) => typeof value === 'number';

export const isNullableStringArray: Validator = (value) => value === null || isStringArray(value);
