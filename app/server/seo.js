import Express from 'express';
import Url from 'url';

const router = new Express.Router();

router.use((req, res, next) => {
  const method = req.method.toLowerCase();
  // Skip when the request is neither a GET or HEAD.
  if (!(method === 'get' || method === 'head')) {
    return next();
  }

  const { pathname, search } = Url.parse(req.url);
  const hasSlash = pathname.charAt(pathname.length - 1) === '/';
  if (search && hasSlash) return res.redirect(301, `${pathname.slice(0, -1)}${search}`);
  if (!search && hasSlash) return next();
  return res.redirect(301, `${pathname}/${search || ''}`);
});

router.use('/home', (req, res) => {
  res.redirect(301, '/');
});

router.use('/index.php', (req, res) => {
  res.redirect(301, '/');
});

router.use('/index.html', (req, res) => {
  res.redirect(301, '/');
});

export default router;
