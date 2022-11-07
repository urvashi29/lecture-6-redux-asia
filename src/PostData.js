import React, { Component } from "react";
import { connect } from 'react-redux';
import { onGetPosts } from "./action";
import DisplayPosts from "./DisplayPosts";

class PostData extends Component {

    componentDidMount = () => {
        const { onGet } = this.props;
        onGet();
    }

    render() {
        return (
            <>
                <DisplayPosts />
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGet: () => dispatch(onGetPosts())
    }
}

export default connect(null, mapDispatchToProps)(PostData);