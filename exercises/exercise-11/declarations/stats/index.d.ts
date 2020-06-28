declare module 'stats' {
  type GetNum = <T>(input: T[], comparator: (a: T, b: T) => number) => number;
  type GetElement = <T>(input: T[], comparator: (a: T, b: T) => number) => T;

  export const getMaxIndex: GetNum;
  export const getMinIndex: GetNum;
  export const getMedianIndex: GetNum;
  export const getAverageValue: GetNum;

  export const getMaxElement: GetElement;
  export const getMinElement: GetElement;
  export const getMedianElement: GetElement;
}
