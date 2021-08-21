export type Connection = undefined | EventTarget & NetworkInformation

export type Navigator = globalThis.Navigator & {
  /**
   * Provides a NetworkInformation object containing information about the network connection of a device.
   */
  readonly connection?: Connection;
  readonly webkitConnection?: Connection;
  readonly mozConnection?: Connection;
};

type NetworkInformation = {
  /**
   * Returns the type of connection a device is using to communicate with the network.
   */
  readonly type: ConnectionType;

  /**
   * Returns the effective type of the connection meaning one of 'slow-2g', '2g', '3g', or '4g'. This value is determined using a combination of recently observed round-trip time and downlink values.
   */
  readonly effectiveType: EffectiveConnectionType;

  /**
   * Returns the maximum downlink speed, in megabits per second (Mbps), for the underlying connection technology.
   */
  readonly downlinkMax: Megabit;

  /**
   * Returns the effective bandwidth estimate in megabits per second, rounded to the nearest multiple of 25 kilobits per seconds.
   */
  readonly downlink: Megabit;

  /**
   * Returns the estimated effective round-trip time of the current connection, rounded to the nearest multiple of 25 milliseconds.
   */
  readonly rtt: Millisecond;

  /**
   * Returns true if the user has set a reduced data usage option on the user agent.
   */
  readonly saveData: boolean;

  /**
   * The event that's fired when connection information changes and the change is fired on this object.
   */
  onchange: Event;
};

type Megabit = number;
type Millisecond = number;

export type Nullable<T> = null | T;

export enum Browser {
  GOOGLE_CHROME = "Google Chrome",
  APPLE_SAFARI = "Apple Safari",
  OPERA = "Opera",
  MOZILLA_FIREFOX = "Mozilla Firefox",
  MICROSOFT_INTERNET_EXPLORER = "Microsoft Internet Explorer",
}

export enum EffectiveConnectionType {
  "2g",
  "3g",
  "4g",
  "slow-2g",
}

export enum ConnectionType {
  "bluetooth",
  "cellular",
  "ethernet",
  "mixed",
  "none",
  "other",
  "unknown",
  "wifi",
  "wimax",
}
