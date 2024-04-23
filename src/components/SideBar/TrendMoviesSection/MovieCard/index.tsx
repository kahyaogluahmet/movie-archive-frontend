import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  film: {
    image: string;
    title: string;
  };
};
function MovieCard({film}:Props) {
  return (
    <div>
      <Link
        href={"#"}
        className="flex gap-2 border rounded p-2 items-center "
      >
        <div className=" w-8 h-8 rounded-full overflow-hidden">
          <Image
            src={film.image}
            height={32}
            width={32}
            alt="Picture of the author"
          />
        </div>
        <p>{film.title}</p>
      </Link>
    </div>
  );
}

export default MovieCard;
