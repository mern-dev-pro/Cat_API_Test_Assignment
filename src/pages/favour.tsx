import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import axios from 'axios';

import FavourPage from '@/components/_pages/Favour';
import { TBreed } from '@/utils/type';

export const getStaticProps: GetStaticProps<{
  breeds: TBreed[];
}> = async () => {
  const { data } = await axios('https://api.github.com/repos/vercel/next.js');
  return { props: { breeds: data } };
};

export default function Home({ breeds }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main>
      <FavourPage breeds={breeds} />
    </main>
  );
}
