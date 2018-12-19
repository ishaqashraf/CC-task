import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage, Alert } from 'react-native';
import { getTodos, deleteTodo, completeTodo } from '../../actions';
import Header from '../common/header';

import { NavigationEvents } from "react-navigation";
import { connect } from 'react-redux';
import { SwipeableFlatList } from 'react-native-swipeable-flat-list';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';


class List extends Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    componentWillMount() {
        this.props.getTodos()
    }

    fetchDate(date) {
        const todoDate = new Date(date)
        const today = moment();
        const yesterday = moment().subtract(1, 'day');
        const tomorrow = moment().add(1, 'day');
        if (moment(todoDate).isSame(today, 'day')) {
            var result = "Due today"
        }
        else if (moment(todoDate).isSame(yesterday, 'day')) {
            var result = "Due yesterday"
        } else if (moment(todoDate).isSame(tomorrow, 'day')) {
            var result = "Due tomorrow"
        } else {
            var result = "Due " + today.format('YY-MM-DD HH:MM');
        }
        return result;
    }

    renderItem = (item) => {
        const date = this.fetchDate(item.date);
        const complete = item.completed == 1 ? styles.itemCompleteTitleStyle : styles.itemTitleStyle;
        return (
            <View style={styles.listItemStyle}>
                <View>
                    <View style={[styles.circle, { backgroundColor: item.color }]} />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={complete}>{item.name}</Text>
                    <Text style={item.complete == 1 ? styles.itemCompleteDateStyle : styles.itemDateStyle}>{date}</Text>
                </View>
            </View>
        );
    }

    renderRight = (item) => {
        return (
            <View style={{ backgroundColor: 'green', height: 50, width: 60, justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="ios-checkmark" size={30} color="#fff" onPress={(e) => {this.props.completeTodo(item.key),this.props.getTodos()}} />
            </View>
        )
    }

    renderLeft = (item) => {
        return (
            <View style={{ backgroundColor: 'red', height: 50, width: 60, justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="ios-trash" size={30} color="#fff" onPress={(e) => this.deleteTodo(item.key)} />
            </View>
        )
    }

    deleteTodo(key) {
        Alert.alert(
            'Delete Todo',
            'Are you sure to delete ?',
            [
                { text: 'Cancel', onPress: () => console.warn('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => { this.props.deleteTodo(key), this.props.getTodos() } },
            ],
            { cancelable: false }
        )
    }


    render() {
        return (
            <View style={styles.mainContainer}>
                <Header headerText="Todo" />
                <View style={styles.contentContainer}>
                    <NavigationEvents
                        onWillFocus={() => this.props.getTodos()} />
                    <SwipeableFlatList
                        data={this.props.data}
                        renderItem={({ item }) => this.renderItem(item)}
                        renderLeft={({ item }) => this.renderLeft(item)}
                        renderRight={({ item }) => this.renderRight(item)}
                        backgroundColor={'white'}
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
        margin: 10
    },
    listItemStyle: {
        height: 60,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemImageStyle: {
        height: 20,
        width: 20
    },
    itemTitleStyle: {
        color: '#000000',
        fontSize: 18
    },
    itemCompleteTitleStyle: {
        color: '#000000',
        fontSize: 18,
        textDecorationLine: 'line-through',
        opacity: 0.7
    },
    itemDateStyle: {
        marginTop: 5,
        color: '#4A4A4A',
        fontSize: 12
    },
    itemCompleteDateStyle: {
        marginTop: 5,
        color: '#4A4A4A',
        fontSize: 12,
        opacity: 0.7
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2
    }

}

const mapStateToProps = ({ todo }) => {
    const { data, loading, error } = todo;
    return { data, loading, error };
}

export default connect(mapStateToProps, {
    getTodos,
    deleteTodo,
    completeTodo
})(List);
