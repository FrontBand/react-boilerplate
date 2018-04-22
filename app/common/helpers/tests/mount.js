import React from 'react';

import { configureStore } from '@/store';
import { Provider } from 'react-redux';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import { mount } from 'enzyme';
import WithStylesContext from '@/WithStylesContext';

export default (component, ...args) => mount(
  <WithStylesContext>
    <Provider store={configureStore({ history: createMemoryHistory() })}>
      {component}
    </Provider>
  </WithStylesContext>,
  ...args
);
