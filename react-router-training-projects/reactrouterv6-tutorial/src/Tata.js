import React from 'react'
import { Link } from 'react-router-dom'
import { getTataCars } from './tatadata'

const Tata = () => {
    const tataCarsData = getTataCars();

  return (
    <div>Tata
        <div>
            {tataCarsData.map((tata) => {
                return <div>
                    <Link to={`/tatacars/${tata.id}`} key={tata.id}>{tata.name}: {tata.model}: {tata.price}</Link>
                    </div>
            })}
        </div>

    </div>
  )
}

export default Tata