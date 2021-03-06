import React from 'react';
import ApplicationBar from '../components/ApplicationBar/ApplicationBar';
import Cards from '../components/Cards/Cards';

const SplashScreen = () => {
    return (
        <div>
            <ApplicationBar title="Splash" visible={false} />
            <Cards/>
        </div>
    );
};

export default SplashScreen;