import { render, screen } from '@testing-library/react';
import Users from './Users';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../test/helpers/renderWithRouter';


jest.mock('axios');

describe('TEST USERS', () => {
  let response;

  beforeEach(() => {
    response = {
        data:[
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
              },
              {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
              },
              {
                "id": 3,
                "name": "Clementine Bauch",
                "username": "Samantha",
              },
              {
                "id": 4,
                "name": "Patricia Lebsack",
                "username": "Karianne",
              },
        ]
    }
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  // test('fetch users', async () => {
  //   axios.get.mockReturnValue(response);
  //   render(<Users />);
  //   const users = await screen.findAllByTestId('user-item');
  //   expect(users.length).toBe(4);
  //   expect(axios.get).toBeCalledTimes(1);
    
  // });

  test('render user detail', async () => {
    axios.get.mockReturnValue(response);
    renderWithRouter(<Users />);
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(4);
    userEvent.click(users[0])
    expect(screen.getByTestId('user-page')).toBeInTheDocument();
  });
})

