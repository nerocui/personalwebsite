import React from 'react';
import Header from '../components/header';
import Dashboard from '../containers/dashboard';

const headerItems = [
    {
        title: 'Blog',
        external: true,
        link: 'https://nerocui.com',
    },
    {
        title: 'Projects',
        external: false,
        link: '/projects',
    },
    {
        title: 'About',
        external: false,
        link: '/about',
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
