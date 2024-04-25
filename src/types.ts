
export type EnglishDataObject = {
  popularMovies: BasicMovieObject[];
  englishCategories: CategoryObject[];
};

export type TurkishDataObject = {
    popularMovies: BasicMovieObject[];
    turkishCategories: CategoryObject[];
  };

export interface BasicMovieObject {
  id: number;
  title: string;
  image: string;
}

export interface CategoryObject {
  id: number;
  name: string;
}
