import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

const links = [
  { label: 'Home', link: '/' },
  { label: 'Breeds', link: '/breeds' },
  { label: 'Favour', link: '/favour' },
];

const Header = () => {
  return (
    <div className={styles.wrapper}>
      {links.map((item, index) => (
        <Link href={item.link} className={styles.link} key={index}>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Header;
