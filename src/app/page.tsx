'use client';

import AuthModel from '@/components/AuthModel';
import LoginModel from '@/components/AuthModel/LoginModel';
import FilmCard from '@/components/FilmCard';
import SideBar from '@/components/SideBar';
import { useEffect, useRef } from 'react';
import langData from '../../language.json';
import { useAtom } from 'jotai';
import {
  categoryAtom,
  langAtom,
  movieAtom,
  searchMoviesAtom,
} from '@/atoms/atom';
import useGetPopularMovies from '@/hooks/useGetPopularMovies';

import axios from 'axios';
import useGetTrendMovies from '@/hooks/useGetTrendMovies';
import Search from '@/components/Search';

export default function Home() {
  const [movies, setMovies] = useAtom(movieAtom);
  const [searchMovies, setSearchMovies] = useAtom(searchMoviesAtom);
  const [lang, setLang] = useAtom(langAtom);

  const model: any = useRef<HTMLDialogElement>();

  const { isError, isLoading, isSuccess, data } = useGetPopularMovies({
    lang,
    movies,
  });

  if (isSuccess) {
    setMovies(data);
  }

  const userLogin = localStorage.getItem('login');
  if (userLogin === 'true') {
    model.current.showModal();
  }

  // TODO:Burası da örnekteki gibi olacak
  // async function searchMovie() {
  //   const request = {
  //     lang: lang,
  //     query: searchRef.current?.value,
  //   };
  //   const res = await fetch(`${process.env.URL}movies/getSearchMovies`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(request),
  //   });
  //   const { searchMovies } = await res.json();
  //   setMovies(searchMovies);
  // }

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
                lang == 'en-US' ? setLang('tr-TR') : setLang('en-US')
              }
            >
              {lang === 'en-US' ? 'Türkçe' : 'English'}
            </span>
            {langData[lang].profile} <div>{langData[lang].settings}</div>
          </div>
        </div>
      </header>
      <main className="container lg:max-w-[1024px] mx-auto  md:bg-green-400  ">
        <Search />

        <div className="flex  mt-10 border p-4 rounded-lg justify-between gap-4 ">
          <div className="flex flex-wrap gap-4 w-[800px]  ">
            {isLoading && <div>Loading</div>}
            {isError && <div>Error</div>}
            {isSuccess && searchMovies.length === 0
              ? movies?.map((movie, index) => {
                  return (
                    <FilmCard
                      key={index}
                      movie={movie}
                    />
                  );
                })
              : searchMovies?.map((movie, index) => {
                  return (
                    <FilmCard
                      key={index}
                      movie={movie}
                    />
                  );
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
