import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar.js';

const Home = () => {
    return ( 
        <>
  
            <Navbar></Navbar>
            
            <Head>
                <title> Prana </title>
            </Head>

            <div className="menu">
                <Link href="/edicoes">
                    <a className="nav-link" style={{marginLeft: 50 + 'px'}}>Edições</a>
                </Link>   
            </div>


        </>

    )
}

export default Home;