/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Tab from './tab';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type : 1
        };
    }

    _pressButton() {
        const { navigator } = this.props;

        console.log("asdasd");
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'tab',
                component: Tab,
            })
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)} style={styles.loginBox}>
                    <Text>点我跳转{this.state.type}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

let styles = {
    loginBox : {
        marginTop : 20
    }
}

AppRegistry.registerComponent('Login', () => Login);
