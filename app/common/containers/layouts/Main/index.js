import React from 'react';
import withStyles from 'withStyles';
import { compose } from 'recompose';
import uuid from 'uuid/v4';
import NavBar from '@/containers/blocks/NavBar';

import styles from './styles.scss';

const navBarList = [
  { title: 'Movies', path: '/movies', id: uuid() },
  { title: 'Actors', path: '/actors', id: uuid() },
];

const Main = ({ children }) => (
  <React.Fragment>
    <NavBar navBarList={navBarList} />
    <div className={styles.main}>{children}</div>
  </React.Fragment>
);
export default compose(withStyles(styles))(Main);
