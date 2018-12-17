import React, { Component } from 'react';
import { View, Text } from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';


class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false
        }
    }

    componentWillReceiveProps(newProps){
        if(this.props.isVisible != newProps.isVisible){
            this.setState({ isDateTimePickerVisible:!this.state.isDateTimePickerVisible })
        }
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        this._hideDateTimePicker();
        this.props.getDate(date)
    };

    render() {
        return (
            <DateTimePicker
                mode="datetime"
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
            />
        );
    }
}

export default DatePicker;
