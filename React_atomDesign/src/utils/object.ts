import { Dict } from '../types';

function omit<T extends Dict, K extends keyof T>(obj: T, keys: K[]) {
  const res: Dict = {};

  Object.keys(obj).forEach((key) => {
    if (keys.includes(key as K)) return;

    res[key] = obj[key];
  });

  return res;
}

function pick<T extends Dict, K extends keyof T>(obj: T, keys: K[]) {
  const res: Dict = {};

  Object.keys(obj).forEach((key) => {
    if (keys.includes(key as K)) res[key] = obj[key];
  });

  return res;
}

export { omit, pick };
