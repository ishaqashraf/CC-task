import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getUser, logout } from '../../actions';

import { connect } from 'react-redux';
import Button from '../common/button';
import Header from '../common/header';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.removeData = this.removeData.bind(this);
    }
    componentWillMount() {
        this.props.getUser();

    }

    removeData() {
        this.props.logout();
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <View style={styles.mainContainer}>
            <Header headerText={`Hello, ${this.props.user}`} />
                <View style={styles.contentContainer}>
                    <Button
                        name="Logout"
                        action={this.removeData}
                        background="#fff"
                        color="#FF3B30"
                        borderColor="rgba(255,59,48,0.3)"
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contentContainer: {
        margin: 15,
        flex: 1,
        justifyContent: 'flex-end',
    }
}

const mapStateToProps = ({ profile }) => {
    const { user, error, loading } = profile;
    return { user, error, loading };
}

export default connect(mapStateToProps, {
    getUser,
    logout
})(Profile);
