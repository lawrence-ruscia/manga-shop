import { House, ShoppingBag, type LucideIcon } from 'lucide-react';
type NavDataType = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export const navData: NavDataType[] = [
  {
    title: 'Home',
    url: '/',
    icon: House,
  },
  {
    title: 'Shop',
    url: '/shop',
    icon: ShoppingBag,
  },
];
