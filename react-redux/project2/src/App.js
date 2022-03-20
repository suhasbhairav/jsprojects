import { useSelector, useDispatch } from 'react-redux';
import { addElement, removeElement } from './actions';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const array = useSelector(state => state.arrayReducer);

  return (
    <div className="App">
      <h1>React Redux</h1>

      <div>
        <button onClick={() => dispatch(addElement(Math.random()))}>Add</button>
        <button onClick={() => dispatch(removeElement())}>Remove</button>
      
      </div>
      <div>
        Numbers: {array.map(num => {
          return (<h2>{num}</h2>)
        })}
      </div>
    </div>
  );
}

export default App;
