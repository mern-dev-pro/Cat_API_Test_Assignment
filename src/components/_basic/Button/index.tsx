import React from 'react';
import classnames from 'classnames';
import { ScaleLoader } from 'react-spinners';

import styles from './styles.module.scss';

type ButtonProps = {
  label: string;
  className?: string;
  Icon?: React.ElementType;
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, className, Icon, isLoading }) => {
  return (
    <button className={classnames(styles.wrapper, className)}>
      {!!Icon && <Icon className={styles.icon} />}
      {label}
      {isLoading && <ScaleLoader height={15} width={3} color="white" className="ml-1" />}
    </button>
  );
};

export default Button;
