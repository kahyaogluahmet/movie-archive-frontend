"use client";


import "./globals.css";
import { Provider, createStore } from "jotai";



const myStore = createStore();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={myStore}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
}
