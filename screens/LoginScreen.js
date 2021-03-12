import React from 'react';
import {connect} from 'react-redux';
import { Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet, Button, TextInput, Platform } from 'react-native';
import PropTypes from 'prop-types';
import {logInUser} from '../redux/actions';

class LogIn extends React.Component {
    state = {
        username: "",
        password: "",
    }

    static propTypes = {
        err: PropTypes.string,
        token: PropTypes.string,
        logInUser: PropTypes.func,
    }

    componentDidUpdate() {
        if(this.props.token  === "thisIsARealToken") {
            console.log("componentDidUpdate")
            this.props.navigation.navigate('HomeScreen')
        }
    }

    logIn = () => this.props.logInUser(this.state.username, this.state.password)

    updateHandler = key => val => this.setState({ [key]: val })

    render() {
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
                <Text> You are currently logged out. </Text>
                {this.props.err && <Text style={styles.error}> Err: {this.props.err} </Text>}

                <TextInput
                    style={styles.input}
                    placeholder="username"
                    value={this.state.username}
                    onChangeText={this.updateHandler('username')}
                    autoCapitalize="none" />

                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder="password"
                    value={this.state.password}
                    onChangeText={this.updateHandler('password')}
                    autoCapitalize="none" />

                <Button style={{borderWidth:1}} title="Login" onPress={this.logIn} />
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center',  borderColor: 'teal', paddingTop: 10, justifyContent:'center',
        backgroundColor: 'white', borderWidth: 10, borderTopWidth: 40, borderBottomWidth: 40, 
    },
    input: {
        minWidth: 300, minHeight: 35,
        marginTop: 30, marginHorizontal: 20, paddingHorizontal: 10, paddingVertical: 5,
        borderRadius: 3, backgroundColor: 'rgb(235, 235, 235)',
    },
    error: {
        textAlign: 'center', color: 'red', paddingTop: 10,
    },
})

const mapStateToProps = state => ({
    err: state.user.loginErr,
    token: state.user.token,
})

export default connect(mapStateToProps, {logInUser})(LogIn)