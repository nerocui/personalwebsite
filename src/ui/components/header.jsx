import React from 'react';
import '../styles/header.scss';

const Header = props => {
    return (
        <div className="header-container">
            <div className="headers">
                {
                    props.items.map(item => {
                        return (
                            <div className="header-item-container">
                                {item.title}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Header;
