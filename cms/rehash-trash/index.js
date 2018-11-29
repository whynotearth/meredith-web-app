import OurStory from './our-story';
import Contact from './contact';

export const business = {
  id: 'rehash-trash',
  name: 'Rehash Trash',
  logo: 'images/rehash-trash/logo.jpeg',
  title: 'Rehash Trash',
};

export const stories = [
  {
    name: 'home',
    image: 'images/rehash-trash/1.jpeg',
    blur: '5px',
    slug: '',
  },
  OurStory,
  Contact,
];

export default {
  business,
  stories,
};
