import React from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Contaner: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={classNames(styles.wrapper, className)}>{children}</div>;
};

export default Contaner;
