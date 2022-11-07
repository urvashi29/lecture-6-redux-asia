import React, { Component } from "react";
import { connect } from 'react-redux';
import { onIncrement } from "./action";

class Counter extends Component {
    state = {

    }

    handleClick = () => {
        this.props.onInc(2);
    }

    render() {
        const { counter } = this.props;


        return (
            <>
                {counter}
                <button onClick={this.handleClick}>Increment</button>
            </>
        )
    }
}

//get the data from central storage (state)
const mapStateToProps = state => {
    return {
        counter: state.count
    }
}

//sending data to central store
const mapDispatchToProps = dispatch => {
    return {
        onInc: (val) => dispatch(onIncrement(val))
    }
}


// connect is a HOC
export default connect(mapStateToProps, mapDispatchToProps)(Counter);


// js object
// var obj = {
//     fullName:  (a) => {
//       return  dispatch()
//     }
// }

// obj.fullName(2)


// add = () => {
//     return 10 + 20;
// }

// console.log(add());