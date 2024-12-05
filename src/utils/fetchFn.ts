export const fetchFn = async <T extends { errors?: string[] }>(
  baseUrl: string,
  rest?: RequestInit
): Promise<T> => {
  const response = await fetch(baseUrl, {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
    },
    ...rest,
  });
  if (!response.ok) {
    const data = (await response.json()) as T;
    const errorMsg = data.errors?.join(" ");
    throw new Error(errorMsg ?? "Couldn't find any image.");
  }

  const data = (await response.json()) as T;

  return data;
};
