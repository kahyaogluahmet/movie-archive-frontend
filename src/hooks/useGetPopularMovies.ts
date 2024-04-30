import { BasicMovieObject } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Prop = {
  lang: 'tr-TR' | 'en-US';
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
const useGetPopularMovies = ({ lang }: Prop) => {
  const data = useQuery({
    queryKey: ['movies'],
    // queryKey: ['movies', lang],Şeklinde olması lazım ama lang'e göre veri değişmediği için yapmıyoruz.
    queryFn: async () => await fetch(lang),
  });
  return data;
};

export default useGetPopularMovies;
