import Story from './story';
import Store from './store';
import Contact from './contact';

export const business = {
    id: 'meredith',
    name: 'Meredith',
    logo: '',
    title: 'Meredith',
  };
  
  export const stories = [
    {
      name: 'home',
      image: 'images/meredith/meredith-story-bg-1',
      blur: '0',
    },
    Story,
    Store,
    Contact,
  ];
  
  export default {
    business,
    stories,
  };