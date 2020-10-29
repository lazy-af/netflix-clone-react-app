import React from 'react';

import Topbar from './Topbar';
import LeftSidebar from './LeftSidebar';

const Starter = ({children}) => {
    return (
        <React.Fragment>
            <div className="app">
                <div className="wrapper">
                    <LeftSidebar/>

                    <div className="content-page">
                        <div className="content">
                            <Topbar/>

                            <div className="container-fluid">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}

export default Starter;
