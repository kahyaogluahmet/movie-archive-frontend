export type EnglishDataObject = {
 popularMovies: BasicMovieObject[];
 englishCategories: CategoryObject[];
};

export type TurkishDataObject = {
 popularMovies: BasicMovieObject[];
 turkishCategories: CategoryObject[];
};

export type BasicMovieObject = {
 id: number;
 title: string;
 image: string;
};

export type CategoryObject = {
 id: number;
 name: string;
};

export type TrendMovieObject = {
    trendMovies : BasicMovieObject[],
    categories : CategoryObject[]
}