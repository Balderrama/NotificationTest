import { render, screen } from '@testing-library/react';
import MessageForm from './components/MessageForm';

test('renders messageForm an check some elements on the DOM', () => {
  render(<MessageForm />);
  const linkElement = screen.getByText(/Notification Test/i);
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument();
});
