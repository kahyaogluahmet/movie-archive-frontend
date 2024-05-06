import { langAtom } from '@/atoms/atom';
import { BasicMovieObject } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAtomValue } from 'jotai';

const fetch = async (lang: string, id: string): Promise<BasicMovieObject[]> => {
  const res = await axios.post(`${process.env.URL}/movies/getMovieDetailById`, {
    lang,
    id,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.data.movieDetails;
};

type Prop = {
  id: string;
};

const useGetMovieById = ({ id }: Prop) => {
  const lang = useAtomValue(langAtom);

  const data = useQuery({
    queryKey: ['movieId', lang, id],
    queryFn: async () => await fetch(lang, id),
    staleTime: 900000,
  });
  return data;
};

export default useGetMovieById;
