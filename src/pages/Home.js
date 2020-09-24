import React from 'react';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';

function Home() {
    return (
        <div className='Home'>
            <Header />
            <AboutMe id='section1' />
        </div>
    )
}

export default Home;
