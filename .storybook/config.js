import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { Provider } from 'react-redux'
import { noop } from 'lodash'
import { Router } from 'react-router'
import createMemoryHistory from 'history/lib/createMemoryHistory';
import { I18nextProvider } from 'react-i18next';
import CookieDough from 'cookie-dough'

import AppLayout from '@/containers/layouts/App'
import { configureStore } from '@/store'
import i18n from '@/services/i18next';
import WithStylesContext from '@/WithStylesContext';

const requireContext = require.context('../app', true, /\.story\.js$/)
const loadStories = () => {
  // https://webpack.github.io/docs/context.html
  requireContext.keys().forEach(requireContext)
}

const store = configureStore({ history: createMemoryHistory(), cookies: CookieDough(), i18n })
addDecorator(story => (
  <I18nextProvider i18n={i18n}>
    <WithStylesContext onInsertCss={noop}>
      <Provider store={store}>
        <AppLayout>
          {story()}
        </AppLayout>
      </Provider>
    </WithStylesContext>
  </I18nextProvider>
))

configure(loadStories, module)
