import { searchMoviesAtom } from '@/atoms/atom';
import useGetAdviceRobotMovies from '@/hooks/useGetAdviceRobotMovies';
import { useSetAtom } from 'jotai';
import React, { useState } from 'react';

type Props = {
  vote: number;
  genres: number[];
  year: number;
};

function SubmitButton({ genres, year, vote }: Props) {
  const setSearchMovies = useSetAtom(searchMoviesAtom);
  const [formState, setFormState] = useState<{
    vote: number;
    genres: number[];
    year: number;
  }>({
    vote: 0,
    genres: [],
    year: 0,
  });

  const { data, status } = useGetAdviceRobotMovies({
    formState,
  });

  if (status === 'success') {
    setSearchMovies(data);
    console.log(formState);
  }

  return (
    <div className='mt-3' >
      <button
      
        onClick={() =>
          setFormState({
            genres,
            year,
            vote,
          })
        }
        className="ml-auto w-32 px-6 py-2 rounded-full bg-[#1B1A55] text-white outline-none"
      >
        Bul
      </button>
    </div>
  );
}

export default SubmitButton;
