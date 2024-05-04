import React, { useState } from 'react';
import langData from '../../../../language.json';
import { useAtom } from 'jotai';
import { langAtom } from '@/atoms/atom';

type Props = {
  setVote: React.Dispatch<React.SetStateAction<number>>;
  vote: number;
};

const votes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

function Imdb({ setVote, vote }: Props) {
  const [lang] = useAtom(langAtom);
  const [showSelect, setShowSelect] = useState(false);

  const showVotes = () => {
    setShowSelect(true);
  };

  const closeVotes = () => {
    setShowSelect(false);
  };


  return (
    <div
      onClick={showVotes}
      className=" bg-[#6196A6] py-2 px-4  text-sm text-left shrink-0 font-medium text-white rounded-3xl uppercase relative"
    >
      <h3>{langData[lang].imdbVote}</h3>
      {showSelect && (
        <div className="absolute top-9">
          <select
            className="bg-[#6196A6] w-24 text-center outline-none   "
            onChange={(e) => {
              setVote(Number(e.target.value));
              closeVotes();
            }}
            value={vote}
            name="Vote"
          >
            {votes.map((vote, i) => (
              <option
                style={{ background: i % 2 == 0 ? ' ' : '#24758D' }}
                key={i}
              >
                {vote}
              </option>
            ))}
          </select>
        </div>
      )}
      {/* <select
        defaultValue="0"
        onChange={(e) => setVote(Number(e.target.value))}
        name="Imdb-puan"
      >
        <option
          value="0"
          disabled
        ></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select> */}
    </div>
  );
}

export default Imdb;
