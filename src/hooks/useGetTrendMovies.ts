import { TrendMovieObject } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Prop = {
  lang: 'tr-TR' | 'en-US';
};

const fetchTrendMovies = async (lang: string): Promise<TrendMovieObject> => {
  const res = await axios.post(`${process.env.URL}/movies/getTrendMovies`, {
    lang,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const {categories,trendMovies} =  res.data;
  return {categories,trendMovies};
};

const useGetTrendMovies = ({ lang }: Prop) => {
  const data = useQuery({
    queryKey: ['trendMovies',lang],
    queryFn: async () => await fetchTrendMovies(lang),
    staleTime: 900000,
  });
  return data;
};

export default useGetTrendMovies;
