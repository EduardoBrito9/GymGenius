import React from 'react';
import styles from './Span.module.css'

const Span = ({children}) => {
  return (
    <span className={styles.span}>{children}</span>
  )
}

export default Span