import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../test/helpers/renderWithRedux";
import { renderTestApp } from "../../test/helpers/renderTestApp";

describe('Counter test', () => {
  
    test('tests router', () => {
      renderTestApp(null, {
        route: '/',
        initialState: {
            counter: {
                value: 10,
            }
        }
      })

      const incrementBtn = screen.getByTestId('increment-btn');
      expect(screen.getByTestId('value-title')).toHaveTextContent('10')
      userEvent.click(incrementBtn);
      expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    });
  
  })
  
  