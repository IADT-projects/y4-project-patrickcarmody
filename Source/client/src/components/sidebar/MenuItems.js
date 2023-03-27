import { Person, VolunteerActivism, Apartment, List, Add, Info, Article } from '@mui/icons-material';
import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'CAMPAIGNS',
  },
  {
    id: uniqueId(),
    title: 'All',
    icon: List,
    href: '/page',
  },
  {
    id: uniqueId(),
    title: 'Individuals',
    icon: Person,
    href: '/campaigns/individual',
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