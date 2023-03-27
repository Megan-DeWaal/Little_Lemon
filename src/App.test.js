import { render, screen } from '@testing-library/react';
import App from './App';
import Reservations from './Components/Reservations';
import Home from './Components/Home';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
  render(<Reservations />);
  const headingElement = screen.getByText("Reserve A Table");
  expect(headingElement).toBeInTheDocument();
})

test('Renders about us on home page', () => {
  render(<Home />);
  const headingElement = screen.getByText("About Us");
  expect(headingElement).toBeInTheDocument();
})
