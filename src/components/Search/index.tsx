import { langAtom, searchMoviesAtom } from '@/atoms/atom';
import useGetSearchMovies from '@/hooks/useGetSearchMovies';
import { useAtom } from 'jotai';
import React, { RefObject, useRef, useState } from 'react';
import langData from '../../../language.json';

function Search() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchMovies, setSearchMovies] = useAtom(searchMoviesAtom);


  const [lang, setLang] = useAtom(langAtom);

  const searchMovie = () => {
   

    if (isSuccess) {
      setSearchMovies(data);
    }
  };

  console.log(searchMovies);

  const { isError, isSuccess, data, refetch } = useGetSearchMovies({
    lang: 'en-US',
    query: searchValue,
  });

  return (
    <div className="flex justify-between items-center w-1/2 mx-auto gap-8 p-4 ">
      <input
    
        onKeyDown={(e) => e.code == 'Enter' && searchMovie()}
        onChange={(e) => setSearchValue(e.target.value)}
        className="outline-none border p-1 w-full rounded-md text-center"
        type="text"
        placeholder="Arama"
      />
      <button
        onClick={() => searchMovie()}
        className="border px-4 py-2 rounded-xl "
      >
        {' '}
        {langData[lang].search}
      </button>
    </div>
  );
}

export default Search;
