import React, { useState } from 'react';
import langData from '../../../../language.json';
import { useAtom } from 'jotai';
import { langAtom } from '@/atoms/atom';

type Props = {
  setYear: React.Dispatch<React.SetStateAction<number>>;
  year: number;
};

const years = [
  '2022',
  '2021',
  '2020',
  '2019',
  '2018',
  '2017',
  '2016',
  '2015',
  '2014',
  '2013',
  '2012',
  '2011',
  '2010',
  '2009',
  '2008',
  '2007',
  '2006',
  '2005',
  '2004',
  '2003',
  '2002',
  '2001',
  '2000',
  '1999',
  '1998',
  '1997',
  '1996',
  '1995',
  '1994',
  '1993',
  '1992',
  '1991',
  '1990',
];

function Years({ setYear, year }: Props) {
  const [lang] = useAtom(langAtom);
  const [showOptions, setShowOptions] = useState(false);

  const showYears = () => {
    setShowOptions(true);
  };

  const closeYears = () => {
    setShowOptions(false);
  };

  console.log(year);

  return (
    <div
      onClick={showYears}
      className=" bg-[#6196A6] py-2 px-4  text-sm text-left shrink-0 font-medium text-white rounded-3xl uppercase relative mb-3"
    >
      <h3>{langData[lang].year}</h3>
      {showOptions && (
        <div className="absolute top-9  ">
          <select
            className="bg-[#6196A6] w-24 text-center outline-none   "
            name="Year"
            value={year}
            onChange={(e) => {
              setYear(Number(e.target.value));
              closeYears();
            }}
          >
            {years.map((year, i) => (
              <option
                style={{ background: i % 2 == 0 ? ' ' : '#24758D' }}
                key={i}
              >
                {year}
              </option>
            ))}
          </select>
        </div>
      )}
      {/* <div className="flex absolute top-7">
        <select
          onChange={(e) => setYear(Number(e.target.value))}
          name="Yıl"
          defaultValue="1"
        >
          <option
            value="1"
            disabled
          ></option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value="1999">1999</option>
          <option value="1998">1998</option>
          <option value="1997">1997</option>
          <option value="1996">1996</option>
          <option value="1995">1995</option>
          <option value="1994">1994</option>
          <option value="1993">1993</option>
          <option value="1992">1992</option>
          <option value="1991">1991</option>
          <option value="1990">1990</option>
        </select>
      </div> */}
    </div>
  );
}

export default Years;
