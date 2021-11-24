import React from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import './style.css';
const StoreProducCard = (props) => {
    return (
        <div>
             <Link to="/productinformationhome">
            <Card className="storeProducCardWrapper">
                <CardImg className="storeProducCardImageWrapper" src={props.image} alt="" />
                <p className="storeProducCardDescription">{props.Description}</p>
                <p className="storeProducCardDescriptionPrice">{props.price}</p>
            </Card>
            </Link>
        </div>
    );
};

export default StoreProducCard;
