import setFn from 'lodash/set';

export const mapServerErrorsToClient = (
  error, mapServerToClient = {}
) => error.invalid.reduce((prev, cur) => {
  const serverPath = cur.entry.slice(2);
  const clientPath = mapServerToClient[serverPath] || serverPath;
  setFn(prev, clientPath, cur.rules.reduce((prevErr, i) => {
    switch (i.rule) {
      case 'number':
        return setFn(prevErr, i.rule, {
          min: i.params.greater_than_or_equal_to,
          max: i.params.less_than_or_equal_to,
        });
      default:
        break;
    }
    return setFn(prevErr, i.rule, i.params);
  }, {}));
  return prev;
}, {});
