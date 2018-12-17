import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import Input from '../common/input';
import Button from '../common/button';
import Logo from '../common/logo';
import { nameChanged, loginUser } from '../../actions';

import { connect } from 'react-redux';


class Login extends Component {
    constructor(props) {
        super(props);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        // AsyncStorage.removeItem("user")
        // AsyncStorage.getItem("user").then((value) => {
        //     console.warn("value session",value)
        // }).done();
    }

    onChangeText(text) {
        this.props.nameChanged(text);
    }

    onSubmit() {
        const { name } = this.props;
        if (name == "") {
            alert("Please Enter Username")
        } else {
            this.props.loginUser(name);
            this.props.navigation.navigate('Home');
        }

    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Logo />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="Name"
                        borderColor="#EEEEEE"
                        height={50}
                        onChangeText={this.onChangeText}
                        value={this.props.name}
                    />
                    <Button
                        name="Login"
                        action={this.onSubmit}
                        background="#4CD964"
                        color="#fff"
                        borderColor="transparent"
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 200
    },
    inputContainer: {
        alignItems: 'center',
        margin: 10
    }
}

const mapStateToProps = ({ auth }) => {
    const { name, user, loading, error } = auth;
    return { name, user, loading, error };
};

export default connect(mapStateToProps, {
    nameChanged,
    loginUser
})(Login);