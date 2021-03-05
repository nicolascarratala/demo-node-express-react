import React from 'react';
import { hot } from "react-hot-loader";
import Home from './pages/Home';
import SplashScreen from './pages/SplashScreen';

const App = () => {
    return (
        <div style={{backgroundColor: "#000"}}>
            <SplashScreen/>
        </div>
    );
};

export default hot(module)(App);