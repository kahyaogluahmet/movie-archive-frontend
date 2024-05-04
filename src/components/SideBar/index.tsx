import React, { useRef } from 'react';
import TrendMoviesSection from './TrendMoviesSection';
import AdviceRobotSection from './AdviceRobotSection';
import useGetTrendMovies from '@/hooks/useGetTrendMovies';
import { useAtom } from 'jotai';
import { langAtom } from '@/atoms/atom';
import Loading from '../Loading';

function SideBar() {
  const model: any = useRef<HTMLDialogElement>();

  const [lang, setLang] = useAtom(langAtom);
  const { isError, isLoading, isSuccess, data } = useGetTrendMovies({ lang });
  return (
    <div className="border rounded-md w-full  flex flex-col gap-4 p-">
      {isError && "Error"}
      <div className="text-white  bg-[#1E293B] h-full rounded-3xl  ">
        {isLoading && <Loading />}
      </div>
      {isSuccess && (
        <>
          <TrendMoviesSection trendMovies={data.trendMovies} />
          <AdviceRobotSection categories={data.categories} />
        </>
      )}
    </div>
  );
}

export default SideBar;
