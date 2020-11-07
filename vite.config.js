export default {
  base: process.env.NODE_ENV === 'production' ?
    '/tik-tak-tu/' :
    '/',
  outDir: 'docs/',
};
