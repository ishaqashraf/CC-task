import React, { Component } from 'react';
import { TouchableOpacity,Text } from 'react-native';


class Button extends Component {
    render() {
        const { background,color,borderColor } = this.props;
        return (
            <TouchableOpacity style={[styles.btnStyle,{ backgroundColor:background,borderColor:borderColor }]} onPress={this.props.action}>
                <Text style={[styles.btnTextStyle,{ color:color }]}>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    btnStyle: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 1
    },
    btnTextStyle: {
        fontSize: 16
    }
}

export default Button;
