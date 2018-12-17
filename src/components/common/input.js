import React, { Component } from 'react';
import { TextInput } from 'react-native';


class Input extends Component {
    render() {
        const { borderColor,height,multiline,editable } = this.props;
        const padding = multiline ? 15 :10;
        return (
            <TextInput
                placeholder={this.props.placeholder}
                placeholderTextColor="#979797"
                multiline={multiline ? multiline : false}
                style={[styles.inputStyle,{ borderColor:borderColor,height:height,paddingTop:padding }]}
                onChangeText={(text) => this.props.onChangeText(text)}
                value={this.props.value}
                editable={editable}
            />
        );
    }
}

const styles = {
    inputStyle: {
        padding: 10,
        borderWidth: 1,
        width: '100%',
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 1,
    }
}

export default Input;
