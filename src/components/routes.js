import React, { Component } from 'react';
import Login from './login/login.js';
import Example from './example.js';

import { Router, Stack, Scene } from 'react-native-router-flux';


class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="auth" initial>
                        <Scene key="login" component={Login} hideNavBar />
                    </Scene>
                    <Scene key="main">
                        <Scene key="example" component={Example} hideNavBar />
                    </Scene>
                </Stack>
            </Router>
        );
    }
}

export default Routes;
