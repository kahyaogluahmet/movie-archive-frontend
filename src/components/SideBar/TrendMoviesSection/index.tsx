import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MovieCard from './MovieCard';
import langData from '../../../../language.json';
import { useAtom } from 'jotai';
import { langAtom } from '@/atoms/atom';
import { BasicMovieObject } from '@/types';
type Prop = { trendMovies: BasicMovieObject[] };
function TrendMoviesSection({ trendMovies }: Prop) {
  const [lang] = useAtom(langAtom);

  return (
    <div className="flex flex-col gap-4">
      <h2>{langData[lang].trendMovies}</h2>
      {trendMovies.map((movie, index) => {
        return (
          <MovieCard
            key={index}
            movie={movie}
          />
        );
      })}
    </div>
  );
}

export default TrendMoviesSection;
