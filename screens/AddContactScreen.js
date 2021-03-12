import React from 'react';
import { TextInput, KeyboardAvoidingView, Button, StyleSheet } from 'react-native';

import { connect } from 'react-redux'
import { store } from '../redux/store'
import { addContact } from '../redux/actions';

class AddContactScreen extends React.Component {

  state = { 
    name: '',
    phone: '',
    isFormValid: false,
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerTitleStyle: { fontSize: 20 },
      headerStyle: { backgroundColor: 'black', shadowColor: 'dimgrey', },
      headerBackTitleVisible: false,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.name !== prevState.name || this.state.phone !== prevState.phone)
      this.validateForm()
  }

  getHandler = key => val => { this.setState({ [key]: val })}

  validateForm = () => {
    const names = this.state.name.split(' ')

    if(+this.state.phone >= 0
      && this.state.phone.length === 10
        && this.state.name.length >= 1
            &&  names.length >= 2  && names[0] && names[1]
    ) 
      return this.setState({isFormValid: true})

    else
      return this.setState({isFormValid: false})
  }

  handleSubmit = () => {
		if(+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 2)
      this.props.addContact({name: this.state.name, phone: this.state.phone, key: store.getState().contacts.length})
    this.props.navigation.navigate('HomeScreen')
  }

  handleCancel = () => {
    this.props.navigation.goBack()
  }

  render() {

    this.props.navigation.setOptions({
      headerRight: () => <Button title='Submit' onPress={this.handleSubmit} disabled={!this.state.isFormValid} />,
    })

    return (
      <KeyboardAvoidingView  behaviour="padding" style={styles.container}>

        <TextInput 
          style={styles.input}    value={this.state.name}       keyboardAppearance="dark"
          placeholder="Name"      onChangeText={this.getHandler('name')} 
          placeholderTextColor="rgb(150, 150, 150)" />

        <TextInput 
          style={styles.input}     value={this.state.phone}       keyboardType="numeric" keyboardAppearance="dark"
          placeholder="Number"     onChangeText={this.getHandler('phone')}
          placeholderTextColor="rgb(150, 150, 150)" />

      </KeyboardAvoidingView>     
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1, backgroundColor: 'black'
  },
  input: {
    backgroundColor: 'rgb(30, 30, 30)', minWidth: 100, borderRadius: 5, color: 'white',
    marginTop: 30,  marginHorizontal: 20, 
    paddingHorizontal: 10, paddingVertical: 5,   
  },
  backTouchable: {
    paddingLeft: 10,
  }
})

export default connect(null, {addContact: addContact})(AddContactScreen)