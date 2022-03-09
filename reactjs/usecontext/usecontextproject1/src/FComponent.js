import React, {useContext} from 'react';
import { CounterContext } from './CounterContext';

const FComponent = () => {
    const {counter, setCounter} = useContext(CounterContext);

  return <div>
      Functional Component
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <FChild />
  </div>;
};

const FChild = () => {
    const {counter, setCounter} = useContext(CounterContext);
    return (
        <div>
            Child Component
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    )
}

export default FComponent;
