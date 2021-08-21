import { Navigator, Browser, Nullable, Connection } from "./types";

type IUseNetworkApi = {
  isOnline: () => boolean,
  getBrowser: () => Nullable<Browser>,
  navigator: Navigator,
  connection: Connection,
}

const navigatorObject = navigator as Navigator;

const getBrowser = (): Nullable<Browser> => {
  const { userAgent } = navigator;

  if (userAgent.indexOf("Chrome") > -1) {
    return Browser.GOOGLE_CHROME;
  } else if (userAgent.indexOf("Safari") > -1) {
    return Browser.APPLE_SAFARI;
  } else if (userAgent.indexOf("Opera") > -1) {
    return Browser.OPERA;
  } else if (userAgent.indexOf("Firefox") > -1) {
    return Browser.MOZILLA_FIREFOX;
  } else if (userAgent.indexOf("MSIE") > -1) {
    return Browser.MICROSOFT_INTERNET_EXPLORER;
  }

  return null;
};

export function useNetworkApi(
  handleNotSupport: Function = () => null
): IUseNetworkApi {
  const connection =
    navigatorObject.connection ||
    navigatorObject.mozConnection ||
    navigatorObject.webkitConnection;

  const isOnline = (): boolean => navigator.onLine;

  !connection && handleNotSupport?.();

  return {
    isOnline,
    getBrowser,
    navigator: navigatorObject,
    connection,
  };
}