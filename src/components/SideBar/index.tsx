import Image from "next/image";
import Link from "next/link";
import React from "react";
import TrendMoviesSection from "./TrendMoviesSection";
import AdviceRobotSection from "./AdviceRobotSection";
import useGetTrendMovies from "@/hooks/useGetTrendMovies";
import { useAtom } from "jotai";
import { langAtom } from "@/atoms/atom";


function SideBar() {
  const [lang, setLang] = useAtom(langAtom);
  const { isError, isLoading, isSuccess, data } = useGetTrendMovies({lang})
if(isSuccess){
  console.log(data)
}
  return (
    <div className="border rounded-md p-2 w-96 flex flex-col gap-4">
      {
        isError && <div>Error</div>
      }
      {
        isLoading && <div>Loading</div>
      }
      {
        isSuccess && <>
      <TrendMoviesSection trendMovies={data.trendMovies}/>
      <AdviceRobotSection categories={data.categories}/>
        </>
      }
    </div>
  );
}

export default SideBar;
