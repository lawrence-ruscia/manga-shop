import { render, screen } from '@testing-library/react';
import { createMemoryRouter, MemoryRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { routes } from './routes';

describe('App', () => {
  it('renders the homepage when navigating to the root', () => {
    const router = createMemoryRouter(routes);
    render(
      <MemoryRouter initialEntries={['/']}>
        <RouterProvider router={router} />
      </MemoryRouter>
    );

    expect(screen.getByText(/homepage/i));
  });
});
