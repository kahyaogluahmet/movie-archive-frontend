import Image from "next/image";
import Link from "next/link";
import React from "react";

type Prop = {
  movie: {
    image: string;
    movieId: number;
  };
};

function FilmCard({ movie }: Prop) {
  return (
    <div>
      <Link href={"#"}>
        <Image
          src={movie.image}
          height={200}
          width={200}
          alt="Picture of the author"
        />
      </Link>
    </div>
  );
}

export default FilmCard;
