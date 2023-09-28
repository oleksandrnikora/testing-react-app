import { getCounterValue } from "./getCounterValue/getCounterValue";

describe('getCountervalue', () => {
    test('work with empty state', () => {
      expect(getCounterValue({})).toBe(0)
    }); 

    test('work with initial value', () => {
        expect(getCounterValue({
            counter: {
                value: 100
            }
        })).toBe(100)
      }); 
  })
  
  