import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions';
import './App.css';



function App() {
  const counter = useSelector(state => state.counterReducer);
  const loggedIn = useSelector(state => state.isLoggedReducer);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>React Redux</h1>
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => dispatch(increment(5))}>Increment</button>
        <button onClick={() => dispatch(decrement(2))}>Decrement</button>
        <button onClick={() => dispatch(signIn())}>Sign In</button>
        {loggedIn && <div><h1>Logged In</h1></div>}
      </div>
    </div>
  );
}

export default App;
