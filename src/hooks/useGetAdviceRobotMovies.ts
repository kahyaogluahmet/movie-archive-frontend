import { langAtom } from '@/atoms/atom';
import { BasicMovieObject } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAtomValue } from 'jotai';

const fetch = async (
  lang: string,
  vote: number,
  genres: number[],
  year: number
): Promise<BasicMovieObject[]> => {
  const res = await axios.post(
    `${process.env.URL}/movies/getRobotSearchMovies`,
    {
      genres,
      lang,
      vote,
      year,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return res.data.robotMovies;
};

type Prop = {
  formState: {
    vote: number;
    genres: number[];
    year: number;
  };
};

const useGetAdviceRobotMovies = ({ formState }: Prop) => {
  const lang = useAtomValue(langAtom);
  const { vote, genres, year } = formState;

  const data = useQuery({
    queryKey: ['movieAdvice', formState],
    queryFn: async () => await fetch(lang, vote, genres, year),
    staleTime: 900000,
    enabled: vote > 0 || year > 0 || genres.length > 0,
  });
  return data;
};

export default useGetAdviceRobotMovies;
