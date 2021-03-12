import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';


export default class ContactDetailsScreen extends React.Component {
    componentDidMount() {
        this.props.navigation.setOptions({
            headerBackTitleVisible: false,
            headerTitleStyle: {fontSize: 20,},
            headerStyle: { backgroundColor: 'rgb(40, 40, 40)', shadowColor: 'dimgrey', },
            headerRight: () => (
                <TouchableOpacity style={styles.header}> 
                    <Text style={styles.editTouchable}> Edit </Text>
                </TouchableOpacity>
            )
        })
    }

    render() {
        return(
            <View style={styles.container}>

                <View style={styles.icon}>
                    <Ionicons name="ios-person" size={100} color="dodgerblue" /> 
                </View>

                <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'grey', padding: 10, margin: 20}}>
                    <Text style={styles.topics}> Name      </Text>
                    <Text style={styles.deets}> Anmol Rastogi </Text>
                </View>

                <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'grey', padding: 10, margin: 20}}>
                    <Text style={styles.topics}> Number </Text>
                    <Text style={styles.deets}> 9891546374 </Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.del} onPress={() => {}} >
                        <Text style={styles.delTouchable}> Delete </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'black', paddingLeft: 5, paddingTop: Constants.statusBarHeight, 
    },
    header: {
        paddingRight: 5, flexDirection:'row', justifyContent: 'flex-end', 
    },
    editTouchable: {
        color: 'dodgerblue', fontSize: 17, marginRight: 5, 
    },
    topics: {
        paddingLeft: 10, fontSize: 17, fontWeight: 'bold', paddingTop: 10, color: 'white',
    },
    deets: {
        paddingTop: 10, paddingLeft: 40, fontSize: 17,  color: 'white',
    },
    del: {
        paddingTop: 40, alignItems: 'center',
    },
    delTouchable: {
        color: 'red', fontSize: 17,
    },
    icon: {
        alignItems: 'center', flexDirection: 'row', justifyContent: 'center', paddingBottom: 10,
    }
})
