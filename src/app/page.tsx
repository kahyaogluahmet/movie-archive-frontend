"use client";

import AuthModel from "@/components/AuthModel";
import LoginModel from "@/components/AuthModel/LoginModel";
import FilmCard from "@/components/FilmCard";
import SideBar from "@/components/SideBar";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, RefAttributes, useEffect, useRef, useState } from "react";
import { json } from "stream/consumers";
import langData from "../../language.json";
import { useAtom } from "jotai";
import { categoryAtom, langAtom, movieAtom } from "@/atoms/atom";
import {
  BasicMovieObject,
  EnglishDataObject,
  TurkishDataObject,
} from "@/types";
import { emitWarning } from "process";

export default function Home() {
 
  const [movies, setMovies] = useAtom(movieAtom);
  const searchRef = useRef<HTMLInputElement>(null)

  const [categories, setCategories] = useAtom(categoryAtom);
  const [lang, setLang] = useAtom(langAtom);

  const model: any = useRef<HTMLDialogElement>();

  useEffect(() => {
    const language = {
      lang: lang,
    };
    // model.current.showModal();

    async function getData() {
      const res = await fetch("http://localhost:3000/getPopularMovies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(language),
      });

      const { popularMovies, englishCategories, turkishCategories } =
        await res.json();
      setMovies(popularMovies);
      setCategories(lang === "en-US" ? englishCategories : turkishCategories);
    }
    if (lang && movies.length == 0) {
      getData();
    }
  }, [lang, movies.length, setCategories, setMovies]);

  async function searchMovie() {
    const request = {
      lang: lang,
      query: searchRef.current?.value
    };
    const res = await fetch("http://localhost:3000/getSearchMovies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    const { searchMovies } = await res.json();
    setMovies(searchMovies);
  }

  return (
    <div className="flex flex-col  justify-between">
      <AuthModel model={model} />
      <header className="bg-red-300 ">
        <div className="container lg:max-w-[1024px] mx-auto flex justify-between items-center h-24">
          <div className="w-28" />
          <div>{langData[lang].title}</div>
          <div className="w-28 flex justify-center items-center gap-3 cursor-pointer">
            <span
              onClick={() =>
                lang == "en-US" ? setLang("tr-TR") : setLang("en-US")
              }
            >
              {lang === "en-US" ? "Türkçe" : "English"}
            </span>
            {langData[lang].profile} <div>{langData[lang].settings}</div>
          </div>
        </div>
      </header>
      <main className="container lg:max-w-[1024px] mx-auto  md:bg-green-400  ">
        <div className="flex justify-between items-center w-1/2 mx-auto gap-8 p-4 ">
          <input
          ref={searchRef}
            onKeyDown={(e) => e.code == "Enter" && searchMovie()}
          
            className="outline-none border p-1 w-full rounded-md text-center"
            type="text"
            placeholder="Arama"
          />
          <button
            onClick={() => searchMovie()}
            className="border px-4 py-2 rounded-xl "
          >
            {" "}
            {langData[lang].search}
          </button>
        </div>
        <div className="flex  mt-10 border p-4 rounded-lg justify-between gap-4 ">
          <div className="flex flex-wrap gap-4 w-[800px]  ">
            {movies.length > 0 &&
              movies?.map((movie, index) => {
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
