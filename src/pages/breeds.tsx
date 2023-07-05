import React from 'react';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import BreedPage from '@/components/_pages/Breeds';
import { TBreed } from '@/utils/type';

export const getServerSideProps: GetServerSideProps<{
  breeds: TBreed[];
}> = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/breeds`);
  return { props: { breeds: data } };
};

export default function Home({ breeds }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <BreedPage breeds={breeds} />
    </main>
  );
}
