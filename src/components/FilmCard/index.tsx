import Image from "next/image";
import Link from "next/link";
import React from "react";

type Prop = {
  movie: {
    image: string;
    id: number;
    title: string;
  };
};

function FilmCard({ movie }: Prop) {
  return (
    <div >
      <Link href={"#"}>
        <Image className="rounded-xl"
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
