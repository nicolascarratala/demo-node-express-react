import React from 'react';
import ApplicationBar from '../components/ApplicationBar/ApplicationBar';
import Cards from '../components/Cards/Cards';
import TextAnimation from '../components/TextAnimation/TextAnimation';

const SplashScreen = () => {
    return (
        <div>
            <ApplicationBar title="Splash" visible={false} />
            <TextAnimation/>
            <Cards/>
        </div>
    );
};

export default SplashScreen;