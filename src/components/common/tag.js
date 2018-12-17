import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';


class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                { color: '#4A90E2', status: 'inactive' },
                { color: '#7ED321', status: 'inactive' },
                { color: '#D0021B', status: 'inactive' },
                { color: '#BD10E0', status: 'inactive' },
                { color: '#F5A623', status: 'inactive' }
            ],
            selectedColorIndex:null,
            selectedColor:''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(i,color){
        await this.setState({ selectedColorIndex:i,selectedColor:color })
        await this.props.getColor(color);
    }

    renderRow() {
        return this.state.colors.map((item, i) => {
            const opacity = this.state.selectedColorIndex == i ? 1 : 0.2 ;
            return(
            <TouchableOpacity key={i} onPress={() => this.onSubmit(i,item.color)}>
                <View style={[styles.circle, { backgroundColor: item.color,opacity:opacity }]} />
            </TouchableOpacity>)
        })
    }

    render() {
        return (
            this.renderRow()
        );
    }
};

const styles = {
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    }
};

export default Tag;