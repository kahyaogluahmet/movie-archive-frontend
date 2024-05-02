import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  film: {
    image: string;
    title: string;
  };
};
function MovieCard({ film }: Props) {
  return (
    <div>
      <Link
        href={'#'}
        className="flex gap-2 border rounded p-2 items-center "
      >
        <Image
          className="aspect-square rounded-full"
          src={film.image}
          width={32}
          height={32}
          alt="Picture of the author"
        />

        <p>{film.title}</p>
      </Link>
    </div>
  );
}

export default MovieCard;
