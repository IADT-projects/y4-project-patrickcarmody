import { Person, VolunteerActivism, List, Add, Info, Article } from '@mui/icons-material';
import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'DONATE',
  },
  {
    id: uniqueId(),
    title: 'Explore',
    icon: List,
    href: '/campaigns/explore',
  },
  {
    id: uniqueId(),
    title: 'Users',
    icon: Person,
    href: '/campaigns/user',
  },
  {
    id: uniqueId(),
    title: 'Charities',
    icon: VolunteerActivism,
    href: '/campaigns/charity',
  },
  {
    id: uniqueId(),
    title: 'Create',
    icon: Add,
    href: '/campaigns/create',
  },
  {
    navlabel: true,
    subheader: 'About',
  },
  {
    id: uniqueId(),
    title: 'Get Started',
    icon: Info,
    href: '/get-started',
  },
  {
    id: uniqueId(),
    title: 'About Us',
    icon: Article,
    href: '/about',
  },
];

export default Menuitems;