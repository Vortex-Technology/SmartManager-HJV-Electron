import { LocalStorageKeys } from '@config/localStorageKeys';

function get<T>(key: LocalStorageKeys): T | null {
  const raw = localStorage.getItem(key);

  if (!raw) return null;

  const response = JSON.parse(raw) as T;

  return response;
}

function set(key: LocalStorageKeys, data: any) {
  const raw = JSON.stringify(data);
  localStorage.setItem(key, raw);
}

export const localStorageFunctions = { get, set };
