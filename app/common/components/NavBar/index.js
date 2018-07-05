import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'withStyles';
import { withRouter, Link } from 'react-router';
import { compose } from 'recompose';
import styles from './styles.scss';

const NavBar = ({ navBarList, ...rest }) => (
  <nav className={styles.root} {...rest}>
    {navBarList &&
      navBarList.map(item => (
        <Link key={item.id} activeClassName="active" to={item.path}>
          {item.title}
        </Link>
      ))}
  </nav>
);

NavBar.propTypes = {
  navList: PropTypes.array,
};

export default compose(
  withStyles(styles),
  withRouter,
)(NavBar);
