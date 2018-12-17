import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { getTodos } from '../../actions';

import { connect } from 'react-redux';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    name: 'Build a React Native app',
                    date: 'Due tomorrow'
                },
                {
                    id: 2,
                    name: 'Write tests',
                    date: 'Due tomorrow'
                },
                {
                    id: 3,
                    name: 'Design app',
                    date: 'Due yesterday'
                }
            ]
        }
        this.renderItem = this.renderItem.bind(this);
    }

    componentWillMount(){
        this.props.getTodos()
    }

    renderItem = (item) => {
        return (
            <View style={styles.listItemStyle}>
                <View>
                    <Image source={require('../../img/blue.png')} style={styles.itemImageStyle} />
                </View>
                <View style={{marginLeft:10}}>
                    <Text style={styles.itemTitleStyle}>{item.todo}</Text>
                    <Text style={styles.itemDateStyle}>{item.dueDate}</Text>

                </View>
            </View>
        );
    }


    render() {
        console.warn("session",this.props.data)
        return (
            <View style={styles.mainContainer}>
                <View style={styles.contentContainer}>
                    <FlatList
                        data={this.props.data}
                        renderItem={({ item }) => this.renderItem(item)}
                        keyExtractor={item => '' + item.id}
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
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemImageStyle: {
        height: 20,
        width: 20
    },
    itemTitleStyle:{
        color:'#000000',
        fontSize:18
    },
    itemDateStyle:{
        marginTop:5,
        color:'#4A4A4A',
        fontSize:12
    }

}

const mapStateToProps = ({ todo }) => {
    const { data,loading,error } = todo;
    return { data,loading,error };
}

export default connect(mapStateToProps,{
    getTodos
})(List);
