import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Container from '@/layout/Container';
import DetailModal from '@/components/_basic/DetailModal';
import Header from '@/components/_basic/Header';
import { TBreed } from '@/utils/type';
import styles from './styles.module.scss';

type BreedPageProps = { breeds: TBreed[] };

const BreedPage: React.FC<BreedPageProps> = ({ breeds }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get('id')) {
      console.log('searchParams.get', searchParams.get('id'));
      setIsOpen(true);
    }
  }, [searchParams]);

  return (
    <Container className={styles.wrapper}>
      <Header />
      <div className={styles.header}>
        <p className={styles.heading}>Breeds</p>
      </div>
      <div className={styles.list}>
        {breeds.map((item, index) => (
          <button className={styles.item} key={index} onClick={() => router.push(`/breeds?id=${item?.id}`)}>
            {item.name}
          </button>
        ))}
      </div>
      <DetailModal
        breed={breeds?.find((item) => item?.id === searchParams.get('id'))}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </Container>
  );
};

export default BreedPage;
