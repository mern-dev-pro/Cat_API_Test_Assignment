import React from 'react';

import Container from '@/layout/Container';
import Header from '@/components/_basic/Header';
import { TBreed } from '@/utils/type';
import styles from './styles.module.scss';

type FavourPageProps = { breeds: TBreed[] };

const FavourPage: React.FC<FavourPageProps> = ({ breeds }) => {
  return (
    <Container className={styles.wrapper}>
      <Header />
      <div className={styles.header}></div>
    </Container>
  );
};

export default FavourPage;
