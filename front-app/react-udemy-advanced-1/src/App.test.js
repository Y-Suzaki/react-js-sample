import { render, screen } from '@testing-library/react';
import AppCss from './components/css/AppCss';

test('renders learn react link', () => {
  render(<AppCss />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
