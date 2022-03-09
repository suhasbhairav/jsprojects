import React from "react";
import { CounterContext } from "./CounterContext";

class CComponent extends React.Component{
    render(){
        return(
            <div>
                <h2>Class Component</h2>
                <h2>{this.props.counter}</h2>
                <CounterContext.Consumer>
                    {(value) => {
                        return <h2>{value}</h2>
                    }}
                </CounterContext.Consumer>
            </div>
        )
    }
}

export default CComponent;