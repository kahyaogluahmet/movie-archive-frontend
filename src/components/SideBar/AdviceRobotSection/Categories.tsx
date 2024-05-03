import { CategoryObject } from '@/types';
import React, { MouseEventHandler } from 'react';

type Props = {
  categories: CategoryObject[];
  setGenres: React.Dispatch<React.SetStateAction<number[]>>;
  genres: number[];
};

function Categories({ categories, setGenres, genres }: Props) {
  function setCheckboxs(
    e: React.ChangeEvent<HTMLInputElement>,
    categoryId: number
  ) {
    if (e.target.checked) {
      setGenres([...genres, Number(categoryId)]);
    } else {
      setGenres([...genres.filter((id) => Number(categoryId) !== id)]);
    }
  }
  function changeColor(e: any) {
    e.target.classList.toggle('bg-[#6196A6]');
    e.target.classList.toggle('bg-[#3B3486]');
  }
  return (
    <div className="grid grid-cols-4 gap-1">
      {categories.map((category, index) => {
        return (
          <div
            key={index}
            onClick={(e) => changeColor(e)}
            className="bg-[#6196A6] py-2 px-2 text-center text-xs shrink-0 font-medium text-white rounded-3xl "
          >
            <label htmlFor={String(category.id)}>{category.name}</label>
            <input
              onChange={(e) => setCheckboxs(e, category.id)}
              type="checkbox"
              name={category.name}
              id={String(category.id)}
              className="hidden"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
