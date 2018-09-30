import React, { Component } from 'react';
import { View,Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';


class Login extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        // this.props.loginUser();
    }

    render() {
        return (
            <View>
            <Text>{this.props.text}</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading, user,text } = auth;

    return { email, password, error, loading ,user,text }
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(Login);