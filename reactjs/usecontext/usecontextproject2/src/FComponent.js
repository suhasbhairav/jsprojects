import React, {useContext} from 'react';
import { DateContext } from './DateContext';

function FComponent() {
    const {date, setDate} = useContext(DateContext);
  return <div>
      <h1>
          FComponent
      </h1>
      <h2>
        Text: {date}
      </h2>     
      <button onClick={() => setDate(new Date().toUTCString())}>Change</button>

  </div>;
}

export default FComponent;
