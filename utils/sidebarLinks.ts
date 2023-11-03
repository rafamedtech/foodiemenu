import type { SidebarLink } from '@/types/SidebarLink';

export const sidebarLinks: SidebarLink[] = [
  {
    title: 'Menú',
    icon: 'icon-park-outline:home',
    href: '/menu',
  },
  {
    title: 'Eventos',
    icon: 'ph:calendar',
    href: '/eventos',
  },
  {
    title: 'Encuesta',
    icon: 'ph:check-square-offset',
    href: '/encuesta',
  },
  {
    title: 'Acerca de',
    icon: 'icon-park-outline:info',
    href: '/',
  },
];
