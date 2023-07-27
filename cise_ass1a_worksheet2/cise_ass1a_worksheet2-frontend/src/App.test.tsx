import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const numberElement = screen.getByText(/Number:/i);
  expect(numberElement).toBeInTheDocument();
});

  describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
      expect(2 + 2).toBe(5);
    });
  });