import React from 'react';
import Search from '../components/form/topBarSearch.jsx';
import Wrapper from '../components/wrapper.jsx';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Wrapper>
                <Search/>
            </Wrapper>
        );
    }
}

export default Register;