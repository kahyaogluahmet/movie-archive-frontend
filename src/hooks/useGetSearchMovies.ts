import { BasicMovieObject } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Prop = {
  lang: 'tr-TR' | 'en-US';
  query:  string;
};

const fetchSearchMovies = async (
  lang: string,
  query: string
): Promise<BasicMovieObject[]> => {
  const res = await axios.post(`${process.env.URL}/movies/getSearchMovies`, {
    lang,query
   ,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { searchMovies } = res.data;
  return searchMovies;
};

const useGetSearchMovies = ({ lang, query }: Prop) => {
  const data = useQuery({
    queryKey: ['searchMovies', query],
    queryFn: async () => await fetchSearchMovies(lang, query),
    enabled: query !== '',
  });
  return data;
};
export default useGetSearchMovies;
