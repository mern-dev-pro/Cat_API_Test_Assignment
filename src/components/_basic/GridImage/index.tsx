import React from 'react';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/solid';
import { TCatImage } from '@/utils/type';
import styles from './styles.module.scss';
import Button from '../Button';

type GridImageProps = {
  cat: TCatImage;
};

const GridImage: React.FC<GridImageProps> = ({ cat }) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={cat.url}
        alt={cat.url}
        loading="lazy"
        width={cat.width}
        height={cat.height}
        className="object-cover w-full h-full"
      />
      <div className={styles?.favourite}>
        <Button
          label="Add To Favour"
          Icon={HeartIcon}
          className="p-2 font-bold text-red-500 bg-gray-200 bg-opacity-50 border rounded-md"
        />
      </div>
    </div>
  );
};

export default React.memo(GridImage);
