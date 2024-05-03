import { BasicMovieObject } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  movie: BasicMovieObject;
};
function MovieCard({ movie }: Props) {
  const { id, image, title } = movie;
  return (
    <div>
      <Link
        href={`/movie/${id}`}
        className="flex gap-5 rounded-3xl py-2 px-6 items-center w-full h-auto bg-[#3B3486]"
      >
        <div className="w-[50px] h-[75px] overflow-hidden shrink-0">
          <Image
            src={image}
            width="0"
            height="0"
            sizes="10vw"
            className="w-full h-auto max-h-full object-cover"
            alt="Picture of the author"
          />
        </div>
        <div className="flex h-12 w-[184px] items-center">
          <p className="text-white text-sm font-medium w-[170px]">{title}</p>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
