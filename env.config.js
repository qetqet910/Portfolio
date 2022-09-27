const debug = process.env.NODE_ENV !== 'production';
const repository = 'https://introduceme.kr';

module.exports = {
  'process.env.BACKEND_URL': !debug ? `${repository}` : '',
};