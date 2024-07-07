import React from 'react';
import cn from 'clsx';
import styles from './ResponsiveContainer.module.css';

const ResponsiveContainer = ({ children, className }) => {
  return (
    <div className={cn(styles.container, className)}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;
