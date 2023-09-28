import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';


describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/react app/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(linkElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    //expect(input).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
    expect(input).toMatchSnapshot();
  });

  test('to be null', () => {
    render(<App />);
    const linkElement = screen.queryByText(/hello/i);
    expect(linkElement).toBeNull();
  });

  test('find by text', async () => {
    render(<App />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
    const linkElement = await screen.findByText(/data/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveStyle({color: 'red' });
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });

  test('CLICK EVENT', async () => {
    render(<App />);

    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.getByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test('INPUT EVENT', () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // fireEvent.input(input, {
    //   target: {value: '123123'}
    // });
    userEvent.type(input, '123123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
  });
})

