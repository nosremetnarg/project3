import React, { useState } from 'react';
import Homepage from '../pages/Homepage';


function Navigation() {
    const tabs = ['Homepage'];
    const [currentTab, setCurrentTab] = useState('About');

    const renderPage = () => {
        switch (currentTab) {
            // case 'Portfolio':
            //   return <Portfolio />;
            // case 'Contact':
            //   return <Contact />;
            // case 'Resume':
            //     return <Resume />
            default:
              return <Homepage />;
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    {tabs.map(tab => (
                        <a 
                            key={tab}
                            className={`nav-item nav-link ${currentTab === tab && 'border'}`}
                            href={"#" + tab.toLowerCase()}
                            onClick={() => setCurrentTab(tab)}    
                        >
                            {tab}
                        </a>
                    ))}
                    </div>
                </div>
            </nav>
            <div>
                {renderPage()}
            </div> 
        </div>

    );
};

export default Navigation;