import { render, screen } from '@testing-library/react';
import App from './App';

test('if Przeczytane ksiazki header is in the index page', () => {
  render(<App />);
  const readBooks = screen.getByText(/Przeczytane książki:/i);
  expect(readBooks).toBeInTheDocument();
});
