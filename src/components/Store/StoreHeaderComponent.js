import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const StoreHeaderComponent = (props) => {
    return (
        <div className="storeHeaderMainComponent">
            <h1>{props.titleHome}</h1>
            <div className="storeHeaderMainComponentlinkWrapper">
                {
                    props.data?.map(category => (
                        <div>
                            <Link to="/"><p>{category.name.toUpperCase()}</p></Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default StoreHeaderComponent;