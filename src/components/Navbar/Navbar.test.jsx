import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders learn react link', () => {
  render(<Navbar />);
  const logo = screen.getByRole('img');
  expect(logo).toBeInTheDocument();
});