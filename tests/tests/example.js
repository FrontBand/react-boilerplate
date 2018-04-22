
module.exports = {
  'Server-side rendering': (client) => {
    client.page.example().navigate().ssr();
    client.end();
  },
};
