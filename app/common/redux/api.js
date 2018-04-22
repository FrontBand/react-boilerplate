import { CALL_API } from 'redux-api-middleware';

export const invoke = config => (dispatch) => {
  const result = {
    ...config,
  };

  result.headers = {
    'content-type': 'application/json',
    pragma: 'no-cache',
    'cache-control': 'no-cache',
    ...result.headers,
  };

  if (typeof result.body !== 'string') {
    result.body = JSON.stringify(result.body);
  }

  return dispatch({
    [CALL_API]: result,
  }).then((action) => {
    if (action.error) throw action;
    return action;
  });
};
