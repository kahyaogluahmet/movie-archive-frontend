import { langAtom } from '@/atoms/atom';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import langData from '../../../../language.json';
import { CategoryObject } from '@/types';
import Imdb from './Imdb';
import Categories from './Categories';
import Years from './Years';
import SubmitButton from './SubmitButton';

type Prop = { categories: CategoryObject[] };

function AdviceRobotSection({ categories }: Prop) {
  const [lang] = useAtom(langAtom);
  const [vote, setVote] = useState<number>(0);
  const [genres, setGenres] = useState<number[]>([]);
  const [year, setYear] = useState<number>(0);

  return (
    <div className="flex flex-col gap-4">
      <h2>{langData[lang].adviceRobot}</h2>
      <div className=" bg-[#6196A6] py-2 px-4  text-sm text-left shrink-0 font-medium text-white rounded-3xl uppercase">
        <h3>{langData[lang].category}</h3>
      </div>
      <Categories
        setGenres={setGenres}
        categories={categories}
        genres={genres}
      />
      <Years setYear={setYear} year={year} />
      <Imdb setVote={setVote} vote={vote} />
      <SubmitButton
        genres={genres}
        vote={vote}
        year={year}
      />
    </div>
  );
}

export default AdviceRobotSection;
