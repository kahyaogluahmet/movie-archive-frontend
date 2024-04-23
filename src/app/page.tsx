"use client";

import AuthModel from "@/components/AuthModel";
import LoginModel from "@/components/AuthModel/LoginModel";
import FilmCard from "@/components/FilmCard";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const model: any = useRef<HTMLDialogElement>();

  // useEffect(() => {
  //   model.current.showModal();
  // }, []);
 

  const movies = [
    {
      image:
        "https://images.pexels.com/photos/18926806/pexels-photo-18926806/free-photo-of-yuksek-dik-macera-seruven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      movieId: 1,
    },
    {
      image:
        "https://images.pexels.com/photos/18926806/pexels-photo-18926806/free-photo-of-yuksek-dik-macera-seruven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      movieId: 2,
    },
    {
      image:
        "https://images.pexels.com/photos/18926806/pexels-photo-18926806/free-photo-of-yuksek-dik-macera-seruven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      movieId: 3,
    },
    {
      image:
        "https://images.pexels.com/photos/18926806/pexels-photo-18926806/free-photo-of-yuksek-dik-macera-seruven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      movieId: 4,
    },
    {
      image:
        "https://images.pexels.com/photos/18926806/pexels-photo-18926806/free-photo-of-yuksek-dik-macera-seruven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      movieId: 5,
    },
    {
      image:
        "https://images.pexels.com/photos/18926806/pexels-photo-18926806/free-photo-of-yuksek-dik-macera-seruven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      movieId: 6,
    },
    {
      image:
        "https://images.pexels.com/photos/18926806/pexels-photo-18926806/free-photo-of-yuksek-dik-macera-seruven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      movieId: 7,
    },
    {
      image:
        "https://images.pexels.com/photos/18926806/pexels-photo-18926806/free-photo-of-yuksek-dik-macera-seruven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      movieId: 8,
    },
    {
      image:
        "https://images.pexels.com/photos/18926806/pexels-photo-18926806/free-photo-of-yuksek-dik-macera-seruven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      movieId: 9,
    },
    {
      image:
        "https://images.pexels.com/photos/18926806/pexels-photo-18926806/free-photo-of-yuksek-dik-macera-seruven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      movieId: 10,
    },
    {
      image:
        "https://images.pexels.com/photos/18926806/pexels-photo-18926806/free-photo-of-yuksek-dik-macera-seruven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      movieId: 11,
    },
    {
      image:
        "https://images.pexels.com/photos/18926806/pexels-photo-18926806/free-photo-of-yuksek-dik-macera-seruven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      movieId: 12,
    },
    {
      image:
        "https://images.pexels.com/photos/18926806/pexels-photo-18926806/free-photo-of-yuksek-dik-macera-seruven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      movieId: 13,
    },
    {
      image:
        "https://images.pexels.com/photos/18926806/pexels-photo-18926806/free-photo-of-yuksek-dik-macera-seruven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      movieId: 14,
    },
    {
      image:
        "https://images.pexels.com/photos/18926806/pexels-photo-18926806/free-photo-of-yuksek-dik-macera-seruven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      movieId: 15,
    },
  ];
  return (
    <div className="flex flex-col  justify-between">
      {/* <AuthModel model={model} /> */}
      <header className="bg-red-300 ">
        <div className="container lg:max-w-[1024px] mx-auto flex justify-between items-center h-24">
          <div className="w-28" />
          <div>Site başlık</div>
          <div className="w-28 flex justify-center items-center gap-3 cursor-pointer">
            Profil <div>Ayarlar</div>
          </div>
        </div>
      </header>
      <main className="container lg:max-w-[1024px] mx-auto  md:bg-green-400  ">
        <div className="flex justify-between items-center w-1/2 mx-auto gap-8 p-4 ">
          <input
            className="outline-none border p-1 w-full rounded-md text-center"
            type="text"
            placeholder="Arama"
          />
          <button className="border px-4 py-2 rounded-xl "> Ara</button>
        </div>
        <div className="flex  mt-10 border p-4 rounded-lg justify-between gap-4 ">
          <div className="flex flex-wrap gap-4 w-[800px] ">
            {movies.map((movie, index) => {
              return <FilmCard key={index} movie={movie} />;
            })}
          </div>

          <SideBar />
        </div>
      </main>
      <footer>
        <div className="bg-red-400 h-14"></div>
      </footer>
    </div>
  );
}
