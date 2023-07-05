import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Button from '@/components/_basic/Button';
import Container from '@/layout/Container';
import GridImage from '@/components/_basic/GridImage';
import Header from '@/components/_basic/Header';
import { TCatImage } from '@/utils/type';

import styles from './styles.module.scss';

const HomePage: React.FC = ({}) => {
  const [catas, setCats] = useState<TCatImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getRandomCats = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/images/search?limit=10`);
      setCats(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRandomCats();
  }, []);

  return (
    <Container className={styles.wrapper}>
      <Header />
      <div className={styles.header}>
        <p className={styles.heading}>Images</p>
        <Button isLoading={isLoading} label="Load More" className={styles.button} onClick={getRandomCats} />
      </div>
      <div className={styles.gridList}>
        {catas.map((item, index) => (
          <GridImage key={index} cat={item} />
        ))}
      </div>
    </Container>
  );
};

export default HomePage;
