import React, {useContext} from 'react';
import { DateContext } from './DateContext';

function FComponent() {
    const {date} = useContext(DateContext);
  return <div>
      <h1>
          FComponent
      </h1>
      <h2>
        Text: {date}
      </h2>      

  </div>;
}

export default FComponent;
