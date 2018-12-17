import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';


class Logo extends Component {
    render() {
        return (
            <View>
                <Image source={require('../../img/logo.png')} />
                <Text style={styles.logoTextStyle}>Todo</Text>
            </View>
        );
    }
}

const styles = {
    logoTextStyle: {
        marginTop: 10,
        fontSize: 20,
        textAlign:'center'
    }
}

export default Logo;
