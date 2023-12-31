import React from 'react';
import classnames from 'classnames';
import { ScaleLoader } from 'react-spinners';

import styles from './styles.module.scss';

type ButtonProps = {
  label: string;
  className?: string;
  Icon?: React.ElementType;
  isLoading?: boolean;
  onClick?: VoidFunction;
};

const Button: React.FC<ButtonProps> = ({ label, className, Icon, isLoading, onClick = () => {} }) => {
  return (
    <button className={classnames(styles.wrapper, className)} onClick={onClick}>
      {isLoading ? (
        <ScaleLoader height={15} width={2.5} color="white" className="ml-1" />
      ) : (
        <>
          {!!Icon && <Icon className={styles.icon} />}
          {label}
        </>
      )}
    </button>
  );
};

export default Button;
