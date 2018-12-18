import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Tag from '../common/tag';
import Input from '../common/input';
import { todoChanged, onSaveItem } from '../../actions';
import Button from '../common/button';
import DatePicker from '../common/datePicker';

import { connect } from 'react-redux';
import Header from '../common/header';


class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickerVisible: false,
            date: '',
            color: ''
        }
        this.onChangeText = this.onChangeText.bind(this);
        this.getDate = this.getDate.bind(this);
        this.getColor = this.getColor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeText(text) {
        this.props.todoChanged(text)
    }

    getColor(val) {
        this.setState({ color: val })
    }

    getDate(date) {
        this.setState({ date: date })
    }

    onSubmit() {
        const { date, color } = this.state;
        const { todoName } = this.props;
        this.props.onSaveItem(todoName, date, color);
        this.props.navigation.navigate('Home');
        this.setState({ date:'',color:'' })

    }

    render() {
        return (
            <View style={styles.mainContainer}>
            <Header headerText="Add" />
                <View style={styles.contentContainer}>
                    <Input
                        placeholder="When do you need to do?"
                        onChangeText={this.onChangeText}
                        value={this.props.todoName}
                        borderColor="#CCCCCC"
                        height={120}
                        multiline={true}
                    />
                    <DatePicker
                        isVisible={this.state.pickerVisible}
                        getDate={this.getDate}
                    />
                    <TouchableOpacity onPress={() => this.setState({ pickerVisible: !this.state.pickerVisible })}>
                        <Input
                            placeholder="When is it due?"
                            onChangeText={this.onChangeText}
                            value={this.state.date.toString()}
                            borderColor="#EEEEEE"
                            height={50}
                            editable={false}
                        />
                    </TouchableOpacity>
                    <View style={styles.tagContainer}>
                        <Tag getColor={this.getColor} />
                    </View>
                    <Button
                        name="Add"
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
        backgroundColor: '#fff'
    },
    contentContainer: {
        margin: 15
    },
    tagContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
    }

}

const mapStateToProps = ({ todo }) => {
    const { todoName } = todo;
    return { todoName };
}

export default connect(mapStateToProps, {
    todoChanged,
    onSaveItem
})(AddTodo);
