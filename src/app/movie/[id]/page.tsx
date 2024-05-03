'use client';
import useGetMovieById from '@/hooks/useGetMovieById';
import React from 'react';

type Props = {
  params: {
    id: string;
  };
};
// TODO:Bu page komple yapılacak
export default function MoviePage({ params }: Props) {
  const { id } = params;
  const { data, isError, isLoading, isSuccess } = useGetMovieById({
    id,
  });

  // FIXME:Bu console iş bittikten sonra silinecek
  if (isSuccess) {
    console.log(data);
  }

  // TODO:Error ve loading yapılacak
  return <div>MoviePage {id}</div>;
}
