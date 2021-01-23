import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';


const Home = () => {
    const teste="davi";
    return ( 
        <Head>
            <title> Prana </title>
        </Head>,
        
        <div className={teste}>
            <h1 > Prana </h1>

            <h1> </h1>
        </div>
        
        
    )
}

export default Home;