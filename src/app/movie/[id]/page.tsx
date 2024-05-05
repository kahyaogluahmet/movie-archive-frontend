'use client';
import useGetMovieById from '@/hooks/useGetMovieById';
import React from 'react';
import langData from '../../../../language.json';
import { langAtom } from '@/atoms/atom';
import { useAtom } from 'jotai';
import Image from 'next/image';
import Comments from '@/components/Comments';
import Link from 'next/link';

type Props = {
  params: {
    id: string;
  };
};

// TODO:Bu page komple yapılacak
export default function MoviePage({ params }: Props) {
  const [lang, setLang] = useAtom(langAtom);
  const { id } = params;
  const { data, isError, isLoading, isSuccess } = useGetMovieById({
    id,
  });

  const runtime = data && data.runtime;
  const hour = Math.floor(runtime / 60);
  const minute = runtime % 60;
  const time = `${hour} ${langData[lang].hour} ${minute} ${langData[lang].minute} `;

  // TODO:Error ve loading yapılacak
  return (
    <div className="">
      <header className="bg-red-300 ">
        <div className="container lg:max-w-[1024px] mx-auto flex justify-between items-center h-24">
          <div className="w-28" />
          <Link href={`/`}>
            {' '}
            <div>{langData[lang].title}</div>
          </Link>

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
      <main className="container lg:max-w-[1024px] mx-auto  md:bg-green-400 p-10 ">
        <div>
          <Image
            className="rounded-2xl  m-auto"
            src={data && data.image}
            alt="blabla"
            width={200}
            height={400}
          />
        </div>
        <div className="flex gap-10 p-6 justify-between">
          <p className="bg-[#F8E559] px-4 py-2 rounded-xl">
            {data && data.original_title}
          </p>
          <p className="bg-[#F8E559] px-4 py-2 rounded-xl">
            {data && time ? time : ''}
          </p>
          <p className="bg-[#F8E559] px-4 py-2 rounded-xl">
            {data && Number(data.imdb).toFixed(1)}
          </p>
        </div>
        <div className="p-9 bg-[#3B3486] text-white rounded-3xl text-lg leading-8">
          <p>
            {data && data.overview
              ? data.overview
              : langData[lang].notFoundDesc}
          </p>
        </div>
      </main>
      <Comments />
    </div>
  );
}
