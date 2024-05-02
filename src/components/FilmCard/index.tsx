import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Prop = {
  movie: {
    image: string;
    id: number;
    title: string;
  };
};

function FilmCard({ movie }: Prop) {
  return (
    <Image
      src={movie.image}
      width="0"
      height="0"
      sizes="10vw"
      className="w-full h-auto max-h-full object-cover"
      priority
      alt="Picture of the author"
    />
  );
}

export default FilmCard;
