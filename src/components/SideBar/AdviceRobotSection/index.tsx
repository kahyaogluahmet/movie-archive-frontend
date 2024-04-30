import { categoryAtom, langAtom, movieAtom } from '@/atoms/atom';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import langData from '../../../../language.json';

function AdviceRobotSection() {
  const [movies, setMovies] = useAtom(movieAtom);
  const [lang] = useAtom(langAtom);
  const [categories] = useAtom(categoryAtom);
  const [vote, setVote] = useState<string>('');
  const [genres, setGenres] = useState<string[]>([]);
  const [year, setYear] = useState<string>('');

  async function getSelectedData() {
    const request = {
      lang: lang,
      vote: vote,
      genres: [genres],
      year: year,
    };

    const res = await fetch('http://localhost:3000/getRobotSearchMovies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    const { robotMovies } = await res.json();

    setMovies(robotMovies);
  }

  function setCheckboxs(
    e: React.ChangeEvent<HTMLInputElement>,
    categoryId: number
  ) {
    if (e.target.checked) {
      setGenres([...genres, String(categoryId)]);
    } else {
      setGenres([...genres.filter((id) => String(categoryId) !== id)]);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h2>{langData[lang].adviceRobot}</h2>
      <select
        defaultValue="1"
        onChange={(e) => setVote(e.target.value)}
        name="Imdb-puan"
        id=""
      >
        <option
          value="1"
          disabled
        >
          {langData[lang].imdbVote}
        </option>
        <option value="imdb-1">1</option>
        <option value="imdb-2">2</option>
        <option value="imdb-3">3</option>
        <option value="imdb-4">4</option>
        <option value="imdb-5">5</option>
        <option value="imdb-6">6</option>
        <option value="imdb-7">7</option>
        <option value="imdb-8">8</option>
        <option value="imdb-9">9</option>
        <option value="imdb-10">10</option>
      </select>
      {/* <select onChange={(e) => setGenres(e.target.value)} name="Kategori" id="">
        <option value="" selected disabled>
          {langData[lang].category}
        </option>
        {categories.map((category, index) => {
          return (
            <option key={index} value={category.id}>
              {category.name}
            </option>
          );
        })}
      </select> */}
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <input
              onChange={(e) => setCheckboxs(e, category.id)}
              type="checkbox"
              name={category.name}
            />
            {category.name}
          </div>
        );
      })}
      <select
        onChange={(e) => setYear(e.target.value)}
        name="Yıl"
        defaultValue="1"
      >
        <option
          value="1"
          disabled
        >
          {langData[lang].year}
        </option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
      </select>
      <button
        onClick={getSelectedData}
        className="ml-auto border px-4 py-2 rounded-md"
      >
        Bul
      </button>
    </div>
  );
}

export default AdviceRobotSection;
