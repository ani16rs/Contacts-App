import React from 'react';
import {Button} from 'react-native';


export default class PureButton extends React.PureComponent {
    state = {
        color: null
    }

    componentDidUpdate() {
        if(this.props.token  === "thisIsARealToken") {
            console.log('componentDidUpdate')
            this.setState({color: 'red'})
        }
    }

    render() {
        return <Button {...this.props} color={this.state.color} />
    }
}
