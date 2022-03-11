import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, signIn} from "./actions";

function App() {
  const counter = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.loggedReducer);

  return (
    <div className="App">
      <h1>React Redux</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(signIn())}>Sign In</button>
      {loggedIn && <div>Logged-In</div>}
    </div>
  );
}

export default App;
