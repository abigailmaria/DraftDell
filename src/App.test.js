// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DraftDell title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DraftDell/i);
    expect(titleElement).toBeInTheDocument();
});
