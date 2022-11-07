import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onGetUsers } from "./action";

const UsersData = () => {
    const [user, setUser] = useState({});
    const users = useSelector(state => state.users);
    console.log(users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(onGetUsers());
    }, []);

    //once, mount
    // useEffect(() => {
    //     window.addEventListener();
    //     return () => {
    //         window.removeEventListener()
    //     }
    // }, []);

    // useEffect(() => {
    //     dispatch();
    // }, [user]);

    
    return (
        <>

        </>
    )
}

export default UsersData;