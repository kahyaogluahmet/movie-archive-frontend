import React from 'react';
import langData from '../../../language.json';
import { langAtom } from '@/atoms/atom';
import { useAtom } from 'jotai';
import Link from 'next/link';

function Header() {
  const [lang, setLang] = useAtom(langAtom);

  return (
    <header className="bg-red-300 ">
      <div className="container lg:max-w-[1024px] mx-auto flex justify-between items-center h-24">
        <div className="w-28" />
        <div>
          <Link href={'/'}> {langData[lang].title}</Link>
        </div>
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
  );
}

export default Header;
