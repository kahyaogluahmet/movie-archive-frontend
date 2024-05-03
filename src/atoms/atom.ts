import { BasicMovieObject, CategoryObject } from '@/types';
import { atom } from 'jotai';

export const movieAtom = atom<BasicMovieObject[]>([]);
export const searchMoviesAtom = atom<BasicMovieObject[]>([]);

export const langAtom = atom<'en-US' | 'tr-TR'>('en-US');
export const categoryAtom = atom<CategoryObject[]>([]);
