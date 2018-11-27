import Donate from './donate';
import Recycling from './recycling';
import Products from './products';
import TestPage from './test-page';

export const business = {
  id: 'rehash-trash',
  name: 'Rehash Trash',
  logo: 'images/rehash-trash/logo.jpg',
  title: 'Our Story'
};

export const stories = [
  Recycling,
  Donate,
  Products,
  TestPage,
];

export default {
  business,
  stories,
};
