import React from "react";
import { useSelector } from "react-redux";

const DisplayPosts = () => {
    const posts = useSelector(state => state.posts);
    console.log(posts);

    return (
        <>

        </>
    )
}

export default DisplayPosts;