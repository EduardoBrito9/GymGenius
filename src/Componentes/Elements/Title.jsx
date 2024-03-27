import React from 'react';
import styles from './title.module.css';

const Title = ({children}) => {
  return (
    <h1 className={styles.titleStyle}>{children}</h1>
  )
}

export default Title