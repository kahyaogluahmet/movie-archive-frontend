'use client';

import AuthModel from '@/components/AuthModel';
import LoginModel from '@/components/AuthModel/LoginModel';
import FilmCard from '@/components/FilmCard';
import SideBar from '@/components/SideBar';
import { useRef } from 'react';
import langData from '../../language.json';
import { useAtom, useAtomValue } from 'jotai';
import { langAtom, movieAtom, searchMoviesAtom } from '@/atoms/atom';
import useGetPopularMovies from '@/hooks/useGetPopularMovies';

import Search from '@/components/Search';
import Link from 'next/link';

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
          <div className="flex flex-wrap gap-3 bg-slate-800 p-3 justify-between items-center rounded-3xl ">
            {isLoading && <div>Loading</div>}
            {isError && <div>Error</div>}
            {isSuccess && searchMovies.length === 0
              ? movies?.map((movie, index) => {
                  return (
                    <Link
                      href={'#'}
                      className="rounded-xl w-[150px] h-[225px] overflow-hidden  bg-slate-300"
                      key={index}
                    >
                      <FilmCard movie={movie} />
                    </Link>
                  );
                })
              : searchMovies?.map((movie, index) => {
                  return (
                    <Link
                      href={'#'}
                      className="rounded-xl overflow-hidden  bg-slate-300"
                      key={index}
                    >
                      <FilmCard
                        key={index}
                        movie={movie}
                      />
                    </Link>
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
