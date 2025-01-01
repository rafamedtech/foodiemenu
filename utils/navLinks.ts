import type { HorizontalNavigationLink } from '#ui/types';

export const links: HorizontalNavigationLink[] = [
  {
    label: 'Menu',
    icon: 'i-heroicons-clipboard-document-list-solid',
    to: '/menu',
  },
  {
    label: 'Events',
    icon: 'i-heroicons-calendar-days-solid',
    to: '/events',
  },
  {
    label: 'Survey',
    icon: 'i-heroicons-clipboard-document-check-solid',
    to: '/survey',
  },
  {
    label: 'About',
    icon: 'i-heroicons-building-storefront-solid',
    to: '/about',
  },
];
