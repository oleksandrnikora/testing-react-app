import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../store/reducers/counterReducer';
import { getCounterValue } from '../../store/reducers/selectors/getCounterValue/getCounterValue';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const onDecrement = () => {
   dispatch(decrement())
  }

  const onIncrement = () => {
   dispatch(increment())
  }


  return (
    <div>
        <h1 data-testid="value-title">{value}</h1>
        <button data-testid="increment-btn" onClick={onIncrement}>increment</button>
        <button data-testid="decrement-btn" onClick={onDecrement}>decrement</button>
    </div>
  )
}

export default Counter