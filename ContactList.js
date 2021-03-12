import React from 'react';
import { View, Text, SectionList, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Row from './Row';

const renSecHead = obj => (
    <View style={styles.header}>
        <Text style={styles.text}> {obj.section.title} </Text>
    </View>
)

const ContactList = props => { 

    const renIt = ({item, key}) => <Row { ...(item) } onSelectContact={contact => props.onSelectContact(contact)} />

    const contactsByLetter = props.contacts.reduce( (obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
        }, {} ) 

    const section = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter],
    }))

    return (
        <View style={{flex:1}}>
            <SectionList
                renderItem = { renIt }
                renderSectionHeader = { renSecHead }
                sections = { section }  
            />
        </View>
    )
}


ContactList.propTypes = {
    renderItem: PropTypes.func,
    renderSectionHeader: PropTypes.func,
    contacts: PropTypes.array,
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgb(40, 40, 40)', borderWidth: 1, borderColor: 'rgb(40, 40, 40)', borderRadius: 5,
    },
    text: {
        padding: 5, color: 'white', fontWeight: 'bold', fontSize:17,
    },
    meSection: {
        flexDirection: 'row', padding: 7, backgroundColor: 'black',
    },
    info: {
        flexDirection: 'column', padding: 10,
    },
    infoText: {
        color: 'white', fontWeight: 'bold', fontSize: 20,
    }
})

export default ContactList