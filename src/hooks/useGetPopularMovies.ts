import { BasicMovieObject } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAtom } from 'jotai';

type Prop = {
  lang: 'tr-TR' | 'en-US';
  movies: BasicMovieObject[];
};

const fetch = async (lang: string): Promise<BasicMovieObject[]> => {
  const res = await axios.post(`${process.env.URL}/movies/getPopularMovies`, {
    lang,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.data.popularMovies;
};
const useGetPopularMovies = ({ lang, movies }: Prop) => {
  const data = useQuery({
    queryKey: ['movies'],
    // queryKey: ['movies', lang],Şeklinde olması lazım ama lang'e göre veri değişmediği için yapmıyoruz.
    queryFn: async () => await fetch(lang),
    enabled: movies.length === 0,
    staleTime: 900000,
  });
  return data;
};

export default useGetPopularMovies;
