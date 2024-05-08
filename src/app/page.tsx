'use client';

import AuthModel from '@/components/AuthModel';
import FilmCard from '@/components/FilmCard';
import SideBar from '@/components/SideBar';
import { useRef } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { langAtom, movieAtom, searchMoviesAtom } from '@/atoms/atom';
import useGetPopularMovies from '@/hooks/useGetPopularMovies';
import Search from '@/components/Search';
import Loading from '@/components/Loading';
import ErrorModal from '@/components/ErrorModal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useAtom(movieAtom);
  const searchMovies = useAtomValue(searchMoviesAtom);
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

  const moviesArray = searchMovies.length > 0 ? searchMovies : movies;

  return (
    <div className="flex flex-col  justify-between">
      <AuthModel model={model} />
      <Header />
      <main className="container lg:max-w-[1024px] mx-auto  md:bg-green-400  ">
        <Search />

        <div className="flex mt-10 border gap-5">
          <div className="grid grid-cols-4 shrink-0 gap-7 bg-slate-800 p-7  rounded-3xl ">
            {isLoading && <Loading />}
            {isError && <ErrorModal />}
            {isSuccess &&
              moviesArray?.map((movie, index) => {
                return (
                  <FilmCard
                    movie={movie}
                    key={index}
                  />
                );
              })}
          </div>
          <SideBar />
        </div>
      </main>
      <Footer />
    </div>
  );
}
