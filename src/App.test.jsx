import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders Hello World text', () => {
    render(<App />);
    const text = screen.getByText(/hello world/i);
    expect(text).toBeInTheDocument();
  });
});
