import { HomePage } from '@/features/HomePage';
import App from './App';
export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];
