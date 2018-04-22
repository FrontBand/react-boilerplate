import React from 'react';
import withStyles from 'withStyles';

import styles from './styles.scss';

const Main = ({ children }) => (
  <div className={styles.main}>
    Main layout
    { children }
  </div>
);
export default withStyles(styles)(Main);
