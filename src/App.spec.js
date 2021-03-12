import React from 'react';
import { render, configure, screen } from '@testing-library/react';
import App from './App';

configure({
  testIdAttribute: 'test-id'
})

describe('App', () => {
  it('Should render hello world message', () => {
    render(<App />);

    expect(screen.getByText('Hello world!')).toBeDefined();
  });
});