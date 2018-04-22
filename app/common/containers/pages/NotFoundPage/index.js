import React from 'react';
import { compose } from 'recompose';
import { translate } from 'react-i18next';

const NotFoundPage = ({ t }) => (
  <div>
    <h1>{t('Page Not Found')}</h1>
  </div>
);

export default compose(
  translate()
)(NotFoundPage);
