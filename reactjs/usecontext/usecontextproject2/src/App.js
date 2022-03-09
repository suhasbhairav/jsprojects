
import {  useState } from 'react';
import './App.css';
import { DateContext } from './DateContext';
import FComponent from './FComponent';

function App() {
  const [date, setDate] = useState("");

  const changeDate = () => {
    setDate(new Date().toTimeString());
  };

  return (
    <div className="App">
      <div>
        Date: {date}
      </div>
      <button onClick={changeDate}>Change</button>
      <DateContext.Provider value={{date, setDate}}>
        <FComponent />
      </DateContext.Provider>
    </div>
  );
}

export default App;
