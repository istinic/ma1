import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the correct title', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello, React with TypeScript!/i);
  expect(headingElement).toBeInTheDocument();
});
