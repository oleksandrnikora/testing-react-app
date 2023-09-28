import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createReduxStore } from './store/store';

describe('TEST APP', () => {
  test('ROUTER TEST', () => {
    render(
<Provider store={createReduxStore()}>
   <MemoryRouter>
      <App />
   </MemoryRouter>
</Provider>
    );
    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    fireEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    fireEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
   
  });

  test('Error test page', () => {
    render(
      <Provider store={createReduxStore()}>
        <MemoryRouter initialEntries={['/hdlqioqldqd']}>
            <App />
        </MemoryRouter>
       </Provider>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
   
  });

})

