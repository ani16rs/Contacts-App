import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class ContactDetailsScreen extends React.Component {
    render() {
        this.props.navigation.setOptions({
            headerTitle: this.props.route.params.name,
            headerTitleStyle: {fontSize: 20,},
            headerStyle: { backgroundColor: 'rgb(40, 40, 40)', shadowColor: 'dimgrey', },
            headerBackTitleVisible: false,
            headerRight: () => (
                <TouchableOpacity>
                    <Text style={styles.editTouchable}> Edit </Text>
                </TouchableOpacity>
            )
        })

        return(
            <View style={styles.container}>
                <View style={styles.icon}>
                    <Ionicons name="ios-person" size={100} color="dodgerblue" />
                </View>

                <View>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'grey', padding: 10, margin: 10}}>
                        <Text style={styles.topics}> Name     </Text>
                        <Text style={styles.deets}> {this.props.route.params.name} </Text>
                    </View>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'grey', padding: 10, margin: 10}}>
                        <Text style={styles.topics}> Number </Text>
                        <Text style={styles.deets}> {this.props.route.params.number} </Text>
                    </View>

                    <TouchableOpacity style={styles.del} onPress={() => {
                        this.props.navigation.goBack()
                    }} >
                        <Text style={styles.delTouchable}> Delete </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'black', paddingLeft: 5, paddingTop: 10
    },
    editTouchable: {
        color: 'dodgerblue', fontSize: 17, marginRight: 5,
    },
    topics: {
        paddingLeft: 10, color: 'white', fontSize: 17, fontWeight: 'bold', paddingTop: 10
    },
    deets: {
        paddingTop: 10, paddingLeft: 40, color: 'white', fontSize: 17,
    },
    del: {
        paddingTop: 40, alignItems: 'center',
    },
    delTouchable: {
        color: 'red', fontSize: 17,
    },
    icon: {
        alignItems: 'center', flexDirection: 'row', justifyContent: 'center', paddingTop: 20, paddingBottom: 10,
    }
})
