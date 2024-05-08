'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css';
import { Provider, createStore } from 'jotai';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const queryClient = new QueryClient();
const myStore = createStore();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={myStore}>
      <QueryClientProvider client={queryClient}>
        <Header />
        {children}
        <Footer />
      </QueryClientProvider>
    </Provider>
  );
}
