import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the correct title', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello World/i);
  expect(headingElement).toBeInTheDocument();

  // This is the failing assertion
  expect(headingElement).toHaveTextContent('Goodbye World');
});
