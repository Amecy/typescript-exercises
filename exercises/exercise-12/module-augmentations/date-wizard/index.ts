// This enabled module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
  interface TimeDetails {
    hours: number;
    minutes: number;
    seconds: number;
  }

  // Add your module extensions here.
  function pad(s: string | number): string;
  function dateDetails(d: Date): DateDetails & TimeDetails;
}
