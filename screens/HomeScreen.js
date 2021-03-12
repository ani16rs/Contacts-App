import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import ContactList from '../ContactList';
import contacts from '../contacts';
import { store } from '../redux/store';
import { connect } from 'react-redux';

import { addContact, changeFirstContact } from '../redux/actions';


class HomeScreen extends React.Component{
    componentDidMount() {
        contacts.map(itr => addContact({ 
            ...itr, 
            key: store.getState().contacts.length
        }))
    }

    render() {
        this.props.navigation.setOptions({
            headerTitle: 'All Contacts',
            headerTitleStyle: { fontSize: 20 },
            headerStyle: { backgroundColor: 'rgb(40, 40, 40)', shadowColor: 'dimgrey', },
            headerRight: () => (
                <Ionicons 
                    name="ios-add-circle"   size={25}
                    color="dodgerblue"      style={styles.addTouchable}
                    onPress={() => this.props.navigation.navigate('AddContactScreen')}
                />
            )
        })


        return (
            <View style = { styles.container } >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('MeScreen')}>

                    <View style={styles.meSection}>
                        <Image style={styles.meImage} source={require('../scs.png')} />
                        <View style={styles.info}>
                            <Text style={styles.infoText}> Anmol Rastogi </Text>
                            <Text style={{color: 'grey', fontSize: 16,}}> My Card </Text>
                        </View>
                    </View>

                </TouchableOpacity>

                <ContactList
                    contacts={this.props.connectContacts}
                    onSelectContact={contact => {
                        this.props.navigation.navigate('ContactDetailsScreen', {
                            name: contact.name,
                            number: contact.phone
                        })
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'black', paddingLeft: 0, padding: 0, 
    },
    addTouchable: {
        paddingRight: 10,
    },
    text: {
        padding: 5, color: 'white', fontWeight: 'bold', fontSize:17,
    },
    meSection: {
        flexDirection: 'row', padding: 10, backgroundColor: 'black',
    },
    info: {
        flexDirection: 'column', padding: 10,
    },
    infoText: {
        color: 'white', fontWeight: 'bold', fontSize: 20,
    },
    meImage: {
        height: 60, width: 60, borderRadius: 30, 
    }
})


const mapStateToProps = state => ({ connectContacts: state.contacts, })

export default connect(mapStateToProps, {changeFirstContact, addContact})(HomeScreen)