const base_url = process.env.NEXT_PUBLIC_API_DOMEN as string;
const api = process.env.NEXT_PUBLIC_API_KEY as string;

export const API_REQUEST = {
  trending: `${base_url}/trending/all/week?api_key=${api}&language=en-US`,
  top_rated: `${base_url}/movie/top_rated?api_key=${api}&language=en-US`,
  tv_top_rated: `${base_url}/tv/top_rated?api_key=${api}&language=en-US`,
  popular: `${base_url}/movie/popular?api_key=${api}&language=en-US`,
  documentary: `${base_url}/discover/movie?api_key=${api}&language=en-US&with_gener=99`,
  comedy: `${base_url}/discover/movie?api_key=${api}&language=en-US&with_gener=35`,
  family: `${base_url}/discover/movie?api_key=${api}&language=en-US&with_gener=10751`,
  history: `${base_url}/discover/movie?api_key=${api}&language=en-US&with_gener=36`,
};
