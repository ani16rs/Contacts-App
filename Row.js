import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


class Row extends React.Component{
    shouldComponentUpdate(nextProps) {
        return nextProps.name !== this.props.name
    }

    render() {
        const {props} = this
        return(
            <TouchableOpacity 
                style={styles.row}
                onPress={() => props.onSelectContact(props)} >

            <Text style={styles.text}> { props.name } </Text>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row', paddingLeft: 10, paddingTop: 10, paddingBottom: 10,
    },
    text: {
        color: 'white', fontSize: 16,
    }
})

export default Row