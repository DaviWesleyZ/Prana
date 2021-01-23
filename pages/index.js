import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
    const navBar="menu";
    return ( 
        <Head>
            <title> Prana </title>
        </Head>,

        <div className={navBar}>
            <Link href="/">
                <a className="nav-link">Home</a>
            </Link>     
            <Link href="/edicoes">
                <a className="nav-link" style={{marginLeft: 50 + 'px'}}>Edições</a>
            </Link>   
        </div>
          
    )
}

export default Home;