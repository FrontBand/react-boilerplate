import React from 'react';
import Helmet from 'react-helmet';
import { compose } from 'recompose';
import withStyles from 'withStyles';

import styles from './styles.scss';

const App = ({ children }) => (<React.Fragment>
  <Helmet
    htmlAttributes={{ lang: 'ru', amp: undefined }} // amp takes no value
    titleTemplate="FrontBand. React Boilerplate - %s"
    defaultTitle="FrontBand. React Boilerplate"
    link={[
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/icons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', href: '/images/icons/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/images/icons/favicon-16x16.png', sizes: '16x16' },
      { rel: 'manifest', href: '/images/icons/manifest.json' },
      { rel: 'mask-icon', href: '/images/icons/safari-pinned-tab.svg', color: '#2c83b5' },
      { rel: 'shortcut icon', href: '/favicon.ico?v=214' },
    ]}
    meta={[
      { charset: 'utf-8' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'react, front, front.band, boilerplate' },
      { name: 'description', content: 'Boilerplate for ReactJS apps in Front.band' },
      { property: 'og:title', content: 'FrontBand. React Boilerplate' },
      { property: 'og:site_name', content: 'FrontBand. React Boilerplate' },
      { property: 'og:description', content: 'Boilerplate for ReactJS apps in Front.band' },
      { name: 'apple-mobile-web-app-title', content: 'FrontBand' },
      { name: 'application-name', content: 'FrontBand' },
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'msapplication-TileImage', content: '/images/icons/mstile-150x150.png' },
      { name: 'msapplication-config', content: '/images/icons/browserconfig.xml' },
      { name: 'theme-color', content: '#ffffff' },
    ]}
  />
  { children }
</React.Fragment>);

export default compose(
  withStyles(styles)
)(App);
