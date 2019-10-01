/**
 * Returns number of minutes/seconds as string, if lower than 10, adds leading zero
 * @param val number 
 */
export const value = (val: number) => val < 10 ? `0${val}` : `${val}`
