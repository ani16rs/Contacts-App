import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PureButton from './PureButton';


export default class PureButtonScreen extends React.Component {
    state = {
        count: 0,
    }

    inc = () => {
        console.log('inc called')
        this.setState( prevState => ({count: prevState.count+1}) )
    }

    render() {
        return(
            <View style={{flex:1}}>
                <View style={styles.counterView}>
                    <Text style={styles.counter}>{this.state.count}</Text>
                </View>
                <PureButton 
                    title="increment count"
                    style={styles.button}
                    onPress={this.inc}          
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    button: { alignSelf: 'center' },
    counterView: { alignSelf: 'center' },
    counter: { fontSize: 30,} ,
})
