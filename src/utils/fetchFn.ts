export const fetchFn = async <T>(
  baseUrl: string,
  rest?: RequestInit
): Promise<T> => {
  const response = await fetch(baseUrl, {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
    },
    ...rest,
  });

  const data = (await response.json()) as T;

  return data;
};
