'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css';
import { Provider, createStore } from 'jotai';

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
    <html lang="en">
     <body>{children}</body>
    </html>
   </QueryClientProvider>
  </Provider>
 );
}
