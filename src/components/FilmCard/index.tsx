import { BasicMovieObject } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Prop = {
  movie: BasicMovieObject;
};

function FilmCard({ movie }: Prop) {
  const { id, image } = movie;
  return (
    <Link
      href={`/movie/${id}` }
      className="rounded-xl w-[100px] h-[150px] overflow-hidden  bg-slate-300"
    >
      <Image
        src={image}
        width="0"
        height="0"
        sizes="10vw"
        className="w-full h-auto max-h-full object-cover"
        priority
        alt="Picture of the author"
      />
    </Link>
  );
}

export default FilmCard;
