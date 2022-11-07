import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onDecrement } from "./action";

const CounterDec = () => {
    const counter = useSelector((state) => state.count);//similar to mapStateToProps;

    const dispatch = useDispatch();//similar to mapDispatchToProps

    const handleDec = () => {
        dispatch(onDecrement(1));
    }

    return (
        <>
            {/* {counter} */}
            <button onClick={handleDec}>Decrement</button>
        </>
    )
}

export default CounterDec;