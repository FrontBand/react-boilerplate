import React from 'react';
import { compose /* ,  withHandlers  */ } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { provideHooks } from 'redial';
import { translate } from 'react-i18next';
import { getActors } from '@/redux';
import { fetchActors } from '@/redux/data/actors';

import withStyles from 'withStyles';
import styles from './styles.scss';

const ActorsListPage = ({ actors }) => (
  <div className={styles.root}>
    <h1>Actors List</h1>
    {actors &&
      actors.map(a => (
        <div key={a.id}>
          <div>{a.name}</div>
          <div>
            <img src={a.photo} alt={a.name} />
          </div>
          <div>{a.id}</div>
        </div>
      ))}
  </div>
);

export default compose(
  withStyles(styles),
  translate(),
  withRouter,
  provideHooks({
    fetch: ({ dispatch, setProps }) =>
      dispatch(fetchActors()).then((response) => {
        setProps({ actorsId: response.payload.result });
      }),
  }),
  connect((state, ownProps) => ({
    actors: getActors(state, ownProps.actorsId),
  })),
  // withHandlers({}),
)(ActorsListPage);
