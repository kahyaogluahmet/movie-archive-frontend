import Image from "next/image";
import Link from "next/link";
import React from "react";
import MovieCard from "./MovieCard";

function TrendMoviesSection() {
  const popular = [
    {
      image:
        "https://images.pexels.com/photos/20700715/pexels-photo-20700715/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Film1",
    },
    {
      image:
        "https://images.pexels.com/photos/20700715/pexels-photo-20700715/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Film2",
    },
    {
      image:
        "https://images.pexels.com/photos/20700715/pexels-photo-20700715/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Film3",
    },
    {
      image:
        "https://images.pexels.com/photos/20700715/pexels-photo-20700715/free-photo-of-isik-parlak-acik-hafif.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Film4",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <h2>Trend Filmler</h2>
      {popular.map((film, index) => {
        return <MovieCard key={index} film={film} />;
      })}
    </div>
  );
}

export default TrendMoviesSection;
