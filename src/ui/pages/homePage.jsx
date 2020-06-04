import React from 'react';
import Header from '../components/header';
import Dashboard from '../containers/dashboard';

const headerItems = [
    {
        title: 'Blog',
    },
    {
        title: 'Projects',
    },
    {
        title: 'About',
    }
];

const HomePage = () => {
    return (
        <div className="page-container">
            <Header items={headerItems}/>
            <Dashboard />
        </div>
    );
};

export default HomePage;
