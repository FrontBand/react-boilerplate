import React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { translate } from 'react-i18next';
import { getActors } from '@/redux';
import { fetchActors } from '@/redux/data/actors';

import ActorCard from '@/containers/blocks/ActorCard';
import Button from '@/components/Button';
import CheckBox from '@/components/CheckBox';

import withStyles from 'withStyles';
import styles from './styles.scss';

const ActorsListPage = ({
  actors,
  t,
  onActorCardClick,
  isFavorite,
  onFilterHandler,
}) => (
  <div className={styles.root}>
    <CheckBox
      label={t('Favorites')}
      checked={isFavorite}
      onClick={onFilterHandler}
    />
    <h1 className={styles.head}>{t('Actors list')}</h1>
    <div className={styles.list}>
      {(isFavorite ? actors.filter(x => x.isFavorite) : actors).map(actor => (
        <div data-cy="actorCard" className={styles.item} key={actor.id}>
          <ActorCard actor={actor} onClick={() => onActorCardClick(actor)} />
        </div>
      ))}
    </div>
    <div className={styles.action}>
      <Button to="/actors/create">{t('Add new actor')}</Button>
    </div>
  </div>
);

export default compose(
  withStyles(styles),
  translate(),
  provideHooks({
    fetch: ({ dispatch, setProps }) =>
      dispatch(fetchActors()).then((response) => {
        setProps({ actorsId: response.payload.result });
      }),
  }),
  connect((state, ownProps) => ({
    actors: getActors(state, ownProps.actorsId),
  })),
  withState('isFavorite', 'setIsFavorite', false),
  withHandlers({
    onActorCardClick: ({ router }) => (actor) => {
      router.push(`/actors/${actor.id}`);
    },
    onFilterHandler: ({ isFavorite, setIsFavorite }) => () => {
      setIsFavorite(!isFavorite);
    },
  }),
)(ActorsListPage);
