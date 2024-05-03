import React from 'react';

type Props = {
  setVote: React.Dispatch<React.SetStateAction<number>>;
};

function Imdb({ setVote }: Props) {
  return (
    <div>
      {/* FIXME:Buraya lang yapılacak */}
      <h3>IMDB Puanı</h3>
      <select
        defaultValue="0"
        onChange={(e) => setVote(Number(e.target.value))}
        name="Imdb-puan"
      >
        <option
          value="0"
          disabled
        >
          def
          {/* {langData[lang].imdbVote} */}
        </option>
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
      </select>
    </div>
  );
}

export default Imdb;
