import App from 'next/app';
import React from 'react';
import Navbar from '../components/Navbar';
import 'font-awesome/css/font-awesome.min.css'
import 'react-fab/dist/main.scss';
import '../styles/style.css'

function _app() {
    return (
        <>
            <Navbar />
        </>

    );
}


export default _app;