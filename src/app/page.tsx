'use client';

import AuthModel from '@/components/AuthModel';
import FilmCard from '@/components/FilmCard';
import SideBar from '@/components/SideBar';
import { useRef } from 'react';
import langData from '../../language.json';
import { useAtom, useAtomValue } from 'jotai';
import { langAtom, movieAtom, searchMoviesAtom } from '@/atoms/atom';
import useGetPopularMovies from '@/hooks/useGetPopularMovies';
import Search from '@/components/Search';
import Loading from '@/components/Loading';
import ErrorModal from '@/components/ErrorModal';

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

        <div className="flex mt-10 border gap-5">
          <div className="grid grid-cols-4 shrink-0 gap-7 bg-slate-800 p-7  rounded-3xl ">
            {/* TODO:Error Modal yapılacak, Loading için spinner koyulacak */}

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
      <footer>
        <div className="bg-red-400 h-14"></div>
      </footer>
    </div>
  );
}
