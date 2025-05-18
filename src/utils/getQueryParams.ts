import type { IQueryParams } from "./types/types";

const getQueryParams = (params: IQueryParams) => {
  const searchParams = new URLSearchParams(window.location.search);
  for (const [key, value] of Object.entries(params)) {
    if (value) {
      searchParams.set(key, String(value));
    } else {
      searchParams.delete(key);
    }
  }
  return searchParams;
};

export default getQueryParams;
