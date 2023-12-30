export const localStorageKeys = {
  accessToken: '@SM:access_token',
  refreshToken: '@SM:refresh_token',
} as const;

export type LocalStorageKeys =
  (typeof localStorageKeys)[keyof typeof localStorageKeys];
