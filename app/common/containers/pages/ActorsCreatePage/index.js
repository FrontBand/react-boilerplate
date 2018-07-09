import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { translate } from 'react-i18next';
import { createActor } from '@/redux/data/actors';

import ActorForm from '@/containers/forms/ActorForm';

import withStyles from 'withStyles';
import styles from './styles.scss';

const ActorsCreatepage = ({ onSubmit, t }) => (
  <div className={styles.root}>
    <div className={styles.title}>{t('Create new actor')}</div>
    <div className={styles.back}>
      <Link to="/actors">{t('Back to the list of actors')}</Link>
    </div>
    <div className={styles.form}>
      <ActorForm onSubmit={onSubmit} />
    </div>
  </div>
);

export default compose(
  withStyles(styles),
  translate(),
  withRouter,
  connect(
    null,
    {
      createActor,
    },
  ),
  withHandlers({
    onSubmit: ({ createActor, router }) => async (formValues) => {
      const response = await createActor(formValues);
      router.push(`/actors/${response.payload.result}`);
    },
  }),
)(ActorsCreatepage);
