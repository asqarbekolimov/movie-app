const base_url = process.env.NEXT_PUBLIC_API_DOMEN as string;
const api = process.env.NEXT_PUBLIC_API_KEY as string;

export const API_REQUEST = {
  trending: `${base_url}/trending/all/week?api_key=${api}&language=en-US`,
  top_rated: `${base_url}/movie/top_rated?api_key=${api}&language=en-US`,
};
