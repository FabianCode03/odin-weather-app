import { getDayName } from '../utils/getDayName';

describe('getDayName', () => {
  it('returns the correct day of the week (1)', () => {
    const date = '01 Jan 2022';
    expect(getDayName(date)).toBe('Sat');
  });

  it('returns the correct day of the week (2)', () => {
    const date = '02 Jan 2022';
    expect(getDayName(date)).toBe('Sun');
  });

  it('returns the correct day of the week (3)', () => {
    const date = '03 Jan 2022';
    expect(getDayName(date)).toBe('Mon');
  });

  it('returns "Today" if the date is "Today"', () => {
    const date = 'Today';
    expect(getDayName(date)).toBe('Today');
  });
});
