import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'withStyles';
import { compose } from 'recompose';
import Poster from '@/components/Poster';
import styles from './styles.scss';

const ActorCard = ({ actor, ...rest }) => (
  <div className={styles.root} {...rest}>
    <div className={styles.poster}>
      <Poster isFavorite={actor.isFavorite} src={actor.photo} title={actor.name} />
    </div>
    <div className={styles.content}>
      <div className={styles.title}>{actor.name}</div>
    </div>
  </div>
);

ActorCard.propTypes = {
  children: PropTypes.node,
};

export default compose(withStyles(styles))(ActorCard);
