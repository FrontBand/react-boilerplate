import { createAction, handleActions } from 'redux-actions';

export const showLoading = createAction('loading/SHOW');
export const hideLoading = createAction('loading/HIDE');

export default handleActions({
  [showLoading]: () => true,
  [hideLoading]: () => false,
}, false);
