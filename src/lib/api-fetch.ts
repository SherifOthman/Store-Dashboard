import { Response } from "@/types/api-types";

const APIUrl = process.env.API_URL;

export async function apiFetch<T>(url: string): Promise<T> {
  console.log(`${APIUrl}/${url}`);

  const res = await fetch(`${APIUrl}/${url}`);

  if (!res.ok) throw new Error(`Failed to fetch the data`);

  const data: Response<T> = await res.json();

  if (data.message) throw new Error(data.message);

  return data.data;
}

function delay(sec: number) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}
